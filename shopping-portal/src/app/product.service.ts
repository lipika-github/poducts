import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cookie} from "ng2-cookies";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ROOT_URI:string="http://localhost:5000"
  private baseUrl = this.ROOT_URI+'/products';

  constructor(private http: HttpClient) { }


  getProduct(productId: string,productCategory:string): Observable<any> {
    var headers = new HttpHeaders({'Authorization': 'Bearer '+Cookie.get('access_token')});
    console.log("productId in get"+productId);
    return this.http.get(`${this.baseUrl}/${productId}/${productCategory}`,{ headers: headers });
  }

  addProduct(product: Object): Observable<Object> {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer '+Cookie.get('access_token')});
    console.log("productId  in add"+product);
    return this.http.post(`${this.baseUrl}`, product,{ headers: headers });
  }

  updateProduct(productId: string, value: any): Observable<Object> {
    var headers = new HttpHeaders({ 'Authorization': 'Bearer '+Cookie.get('access_token')});
    console.log("productId  in update"+productId);
    return this.http.put(`${this.baseUrl}/${productId}`, value,{ headers: headers });
  }

  getProductList(): Observable<any> {
    var headers = new HttpHeaders({'Authorization': 'Bearer '+Cookie.get('access_token')});
    return this.http.get(`${this.baseUrl}`,{ headers: headers });
  }
}
