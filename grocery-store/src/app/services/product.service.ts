import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = []
  private personURL = 'http://localhost:5000/products'
  constructor(
    private http: HttpClient
  ) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.personURL)
  }

  getProduct() {
   return this.products
  }

  getProductById(id: number): Observable<Product[]> {
    const params = {
      id
    }
    return this.http.get<Product[]>(this.personURL,{params})
  }

  saveTermp() {
    localStorage.setItem('cart_list', JSON.stringify(this.products))
  }

  addToCart(product: Product) {
    this.products.push(product)
    this.saveTermp();
  }

  getProductToCart(): void{
    this.products = JSON.parse(localStorage.getItem('cart_list') || '')
  }

  productInCart(product: Product) {
    return this.products.findIndex((i:Product) => i.id === product.id) > -1
  }

  clearProduct(product: Product) {
    const index = this.products.findIndex((i:Product) =>i.id ===product.id)

    if (index > -1) {
      this.products.slice(index,1);
      this.saveTermp()
    }
  }

  clearCart() {
    localStorage.clear()
  }
}
