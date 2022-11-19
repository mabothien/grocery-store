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
  constructor(private ProductService: ProductService) {}

  async ngOnInit() {
    await this.ProductService.getProductToCart();
    this.cartList = [...this.ProductService.products];
  }

  totalPrice() {
    return this.cartList.reduce(
      (sum, product) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price,
      }),
      { quantity: 1, price: 0 }
    ).price.toFixed();
  }
}
