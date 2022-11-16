import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product
  constructor() {
    this.cartItem = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }
  ngOnInit(): void {

  }
  addToCart() {
    window.alert("added to cart")
  }
}
