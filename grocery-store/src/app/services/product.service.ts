import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  user:User = {
    totalPrice: 0,
    fullName: '',
    address: '',
    creditNumber: ''
  }
  private personURL = 'http://localhost:5000/products';
  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.personURL);
  }

  getProduct() {
    return this.products;
  }

  getUser() {
    return this.user;
  }

  getProductById(id: number): Observable<Product[]> {
    const params = {
      id,
    };
    return this.http.get<Product[]>(this.personURL, { params });
  }

  saveTermp() {
    localStorage.setItem('cart_list', JSON.stringify(this.products));
  }

  addToCart(product: Product) {
    if (!this.productInCart(product)) {
      this.products.push(product);
    }
    this.saveTermp();
    window.alert("Added to cart!")
  }

  getProductToCart(): void {
    if (localStorage.getItem('cart_list')) {
      this.products = JSON.parse(localStorage.getItem('cart_list') || '');
    }
  }

  productInCart(product: Product) {
    return this.products.findIndex((i: Product) => i.id === product.id) > -1;
  }

  clearProduct(product: Product) {
    const index = this.products.findIndex((i: Product) => i.id === product.id);
    if (index > -1) {
      this.products.splice(index, 1);
      this.saveTermp();
      window.alert("Remove from cart")
    }
  }

  clearCart() {
    localStorage.clear();
  }

  saveUserInfor(user: User) {
    localStorage.setItem('user_information', JSON.stringify(user));
  }
}
