import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;
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
    this.currentQuantity = this.cartItem.quantity
    this.numbers = Array(10)
    .fill(0)
    .map((x, i) => i);
  }
  addToCart() {
    window.alert('added to cart');
  }

  onSelectQuantity() {
    this.cartItem.quantity = this.currentQuantity;
  }
}
