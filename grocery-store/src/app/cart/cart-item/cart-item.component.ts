import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartProduct;
  @Output() removeProduct: EventEmitter<CartProduct> = new EventEmitter();
  numbers: Array<number> = [];
  currentQuantity = 0;
  constructor() {
    this.cartItem = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1,
    };
  }
  ngOnInit(): void {
    this.currentQuantity = this.cartItem.quantity;
    this.numbers = Array(10)
      .fill(0)
      .map((x, i) => i);
  }
  addToCart() {
    window.alert('added to cart');
  }

  onSelectQuantity() {
    this.cartItem.quantity = this.currentQuantity;
    if (this.currentQuantity === 0) {
      this.removeProduct.emit(this.cartItem);
    }
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.code === 'Minus' && e.key === '-' && e.keyCode === 189) {
      e.preventDefault();
    }
  }

  remove() {
    this.removeProduct.emit(this.cartItem);
  }
}
