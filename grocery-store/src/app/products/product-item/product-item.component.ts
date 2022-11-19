import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  numbers: Array<number> = [];
  currentQuantity = 0;
  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1,
    };
  }

  ngOnInit(): void {
    this.numbers = Array(10)
      .fill(0)
      .map((x, i) => i);
  }

  onSelectQuantity() {
    this.product.quantity = this.currentQuantity;
  }
  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
