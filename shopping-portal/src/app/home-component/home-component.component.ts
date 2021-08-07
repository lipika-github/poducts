import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-home-component',
  providers: [AppService],
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  public isLoggedIn = false;

  constructor(
    private _service:AppService){}

  ngOnInit():void{
    this.isLoggedIn = this._service.checkCredentials();
    let i = window.location.href.indexOf('code');
    console.log("in home ",this.isLoggedIn,i);
    if(!this.isLoggedIn && i != -1){
      this._service.retrieveToken(window.location.href.substring(i + 5));
    }
  }

  test(){
    this.isLoggedIn = this._service.checkCredentials();
    let i = window.location.href.indexOf('code');
    console.log("in home ",this.isLoggedIn,i);
    if(!this.isLoggedIn && i != -1){
      this._service.retrieveToken(window.location.href.substring(i + 5));
    }
  }

  login() {
    window.location.href = 'http://localhost:8080/auth/realms/shopping-portal/protocol/openid-connect/auth?response_type=code&scope=openid%20read%20write&client_id=' +
      this._service.clientId + '&redirect_uri='+ this._service.redirectUri;
  }

  logout() {
    this._service.logout();
  }

}
