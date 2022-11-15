import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:5000/products")
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`"http://localhost:5000/products/${id}`)
  }
}
