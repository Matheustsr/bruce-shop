import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public url = 'http://localhost:3001/v1'
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.url}/products`);
  }
  authenticate(data: any) {
    return this.http.post(`${this.url}/accounts/authenticate`, data);
  }
  refreshToken() {
    return this.http.post(`${this.url}/accounts/refresh-token`, null);
  }

}
