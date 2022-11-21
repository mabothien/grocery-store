import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  @Output() selectQuantityEvent: EventEmitter<any> = new EventEmitter();
  numbers: Array<number> = [];
  currentQuantity = 1;
  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.numbers = Array(10)
      .fill(0)
      .map((x, i) => i + 1);
  }

  onSelectQuantity() {
    this.selectQuantityEvent.emit({
      product: this.product,
      quantity: this.currentQuantity,
    });
  }
  onAddToCart(product: Product) {
    this.addToCart.emit({
      product: this.product,
      quantity: this.currentQuantity,
    });
  }
}
