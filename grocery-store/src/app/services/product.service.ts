import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private personURL = 'http://localhost:5000/products'
  constructor(
    private http: HttpClient
  ) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.personURL)
  }

  getProductById(id: number): Observable<Product[]> {
    const params = {
      id
    }
    return this.http.get<Product[]>(this.personURL,{params})
  }
}
