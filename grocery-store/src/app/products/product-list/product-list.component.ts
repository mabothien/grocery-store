import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  constructor(
    private ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.ProductService.getProductList().subscribe(res => this.productList = res);
  }

}
