import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;
  @Output() removeProduct: EventEmitter<Product> = new EventEmitter();
  numbers: Array<number> = [];
  currentQuantity = 0;
  constructor(private productService: ProductService) {
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
    console.log(this.currentQuantity);
  }
}
