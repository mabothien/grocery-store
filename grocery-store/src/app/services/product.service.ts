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
  user: User = {
    totalPrice: 0,
    fullName: '',
    address: '',
    creditNumber: '',
  };
  private personURL = 'http://localhost:5000/products';
  constructor(private http: HttpClient) { }

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

  addToCart(product: Product, quantity: number) {
    const newCartItem = new CartProduct(product);
    if (!this.productInCart(product)) {
      this.cartProduct.push(newCartItem);
      this.onUpdateQuantity(newCartItem, quantity);
    }
    window.alert('Added to cart!');
  }

  onUpdateQuantity(product: Product, quantity: number) {
    const index = this.cartProduct.findIndex(
      (i: Product) => i.id === product.id
    );
    if (index > -1) {
      this.cartProduct[index].quantity = quantity;
    }
  }
  remove(id: number) {
    const index = this.cartProduct.findIndex((i: Product) => i.id === id);
  }

  productInCart(product: Product) {
    return this.cartProduct.findIndex((i: Product) => i.id === product.id) > -1;
  }

  clearProduct(product: Product) {
    const index = this.cartProduct.findIndex(
      (i: Product) => i.id === product.id
    );
    if (index > -1) {
      this.cartProduct.splice(index, 1);
      window.alert('Remove from cart');
    }
  }

  removeCartProduct() {
    this.cartProduct = []
  }

  totalPrice () {
    return this.cartProduct
    .reduce(
      (sum, product) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price,
      }),
      { quantity: 1, price: 0 }
    )
    .price.toFixed();
  }
}
