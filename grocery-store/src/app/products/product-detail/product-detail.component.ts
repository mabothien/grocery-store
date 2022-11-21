import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  numbers: Array<number> = [];
  quantity = new FormControl(0);
  currentQuantity = 1;
  product: Product = {
    id: 1,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  productId = '';
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.router.params.subscribe((params) => {
      this.productId = params['id'];
    });

    this.numbers = Array(10)
      .fill(0)
      .map((x, i) => i + 1);

    await this.productService
      .getProductById(parseInt(this.productId))
      .subscribe((res: Product[]) => {
        this.product = res[0];
      });
    const index = this.productService.cartProduct.findIndex(
      (x) => x.id === Number(this.productId)
    );
    this.currentQuantity = this.productService.cartProduct[index].quantity;
  }
  onSelectQuantity() {
    this.productService.onUpdateQuantity(this.product, this.currentQuantity);
    // const index = this.productService.cartProduct.findIndex((x) => x.id === this.product.id)
    // this.currentQuantity = this.productService.cartProduct[index].quantity
  }
  addToCart(): void {
    this.productService.addToCart(this.product, this.currentQuantity);
  }
}
