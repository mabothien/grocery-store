import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((res) => (this.productList = res));
  }

  addToCart(params: any): void {
    this.productService.addToCart(params.product, params.quantity);
  }
  onSelectQuantityEvent(params: any) {
    this.productService.onUpdateQuantity(params.product, params.quantity);
  }
}
