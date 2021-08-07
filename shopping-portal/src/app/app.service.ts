import {Injectable} from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class AppService {
   public clientId = 'test-client';
   public redirectUri = 'http://localhost:4200/';

  constructor(
    private _http: HttpClient){}

  retrieveToken(code:any){
    console.log("in retrieve ",code);
    let params = new URLSearchParams();
    params.append('grant_type','authorization_code');
    params.append('client_id', this.clientId);
    params.append('client_secret', "c28f3b4d-a653-4265-859c-6b3938be4f70");
    params.append('redirect_uri', this.redirectUri);
    params.append('code',code);
    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
     this._http.post('http://localhost:8080/auth/realms/shopping-portal/protocol/openid-connect/token', params.toString(), { headers: headers })
    .subscribe(
      data => this.saveToken(data),
       err => console.log(err)
    );
  }

  saveToken(token:any){
    console.log("in rsavetoken");
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    Cookie.set("id_token", token.id_token, expireDate);
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:4200';
  }

  getResource(resourceUrl:any) : Observable<any>{
    var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
    return this._http.get(resourceUrl, { headers: headers })
                   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  checkCredentials(){
    console.log("in checkCredentials");
    return Cookie.check('access_token');
  }

  logout() {
    let token = Cookie.get('id_token');
    Cookie.delete('access_token');
    Cookie.delete('id_token');
    let logoutURL = "http://localhost:8080/auth/realms/shopping-portal/protocol/openid-connect/logout?id_token_hint="
      + token
      + "&post_logout_redirect_uri=" + this.redirectUri;

    window.location.href = logoutURL;
  }
}
