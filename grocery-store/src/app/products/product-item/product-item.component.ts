import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product
  numbers: Array<number> = []
  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
   this.numbers = Array(10).fill(0).map((x,i)=>i);
  }

  addToCart() {
    window.alert("added to cart")
  }

}
