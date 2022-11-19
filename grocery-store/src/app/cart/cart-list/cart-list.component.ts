import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartList: Product[] = [];
  constructor(private productService: ProductService) {}

  async ngOnInit() {
    console.log(1);
    await this.productService.getProductToCart();
    this.cartList = [...this.productService.products];
  }

  totalPrice() {
    return this.cartList
      .reduce(
        (sum, product) => ({
          quantity: 1,
          price: sum.price + product.quantity * product.price,
        }),
        { quantity: 1, price: 0 }
      )
      .price.toFixed();
  }

  removeProduct(product: Product) {
    this.productService.clearProduct(product);
    this.cartList = [...this.productService.products];
  }
}
