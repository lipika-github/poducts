import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // ROOT_URI:string="http://localhost:5000"
   ROOT_URI:string="http://product-info.us-east-1.elasticbeanstalk.com"
  private baseUrl = this.ROOT_URI+'/products';

  constructor(private http: HttpClient) { }


  getProduct(productId: string,productCategory:string): Observable<any> {
    console.log("productId in get"+productId);
    return this.http.get(`${this.baseUrl}/${productId}/${productCategory}`);
  }

  addProduct(product: Object): Observable<Object> {
    console.log("productId  in add"+product);
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(productId: string, value: any): Observable<Object> {
    console.log("productId  in update"+productId);
    return this.http.put(`${this.baseUrl}/${productId}`, value);
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
