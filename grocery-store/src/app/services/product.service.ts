import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { CartProduct } from '../models/cartProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartProduct: CartProduct[] = [];
  totalCart: number;
  user: User = {
    totalPrice: 0,
    fullName: '',
    address: '',
    creditNumber: '',
  };
  private personURL = 'http://localhost:5000/products';
  constructor(private http: HttpClient) {
    this.totalCart = 0
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.personURL);
  }

  getCartProduct(): CartProduct[] {
    return this.cartProduct;
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

  // saveTermp() {
  //   localStorage.setItem('cart_list', JSON.stringify(this.cartProduct));
  // }

  addToCart(product: Product, quantity: number) {
    const newCartItem = new CartProduct(product)
    if (!this.productInCart(product)) {
      this.cartProduct.push(newCartItem);
      this.onUpdateQuantity(newCartItem, quantity)
    }
    // this.saveTermp();
    window.alert('Added to cart!');
  }

  onUpdateQuantity(product: Product, quantity:number) {
    const index = this.cartProduct.findIndex((i: Product) => i.id === product.id);
    if (index > -1) {
      this.cartProduct[index].quantity = quantity
    }
  }
  remove(id:number) {
    const index = this.cartProduct.findIndex((i: Product) => i.id === id);
  }

  // getProductToCart() {
  //   if (localStorage.getItem('cart_list')) {
  //     return this.cartProduct = JSON.parse(localStorage.getItem('cart_list') || '');
  //   }
  // }

  productInCart(product: Product) {
    return this.cartProduct.findIndex((i: Product) => i.id === product.id) > -1;
  }

  clearProduct(product: Product) {
    const index = this.cartProduct.findIndex((i: Product) => i.id === product.id);
    if (index > -1) {
      this.cartProduct.splice(index, 1);
      // this.saveTermp();
      window.alert('Remove from cart');
    }
  }

  clearCart() {
    localStorage.clear();
  }

  saveUserInfor(user: User) {
    localStorage.setItem('user_information', JSON.stringify(user));
  }

  getAmountProduct(): number {
    const amountProduct = this.cartProduct.reduce((prev, curr): number => {
      return prev + curr.quantity;
    }, 0);
    return amountProduct;
  }
}
