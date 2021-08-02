import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ROOT_URI:string="http://product-info.us-east-1.elasticbeanstalk.com"
  private baseUrl = this.ROOT_URI+'/products';

  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
