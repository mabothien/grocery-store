import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartList: Product[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  async ngOnInit() {
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

  onSubmitForm(userInfor: User) {
    userInfor.totalPrice = Number(this.totalPrice());
    this.productService.saveUserInfor(userInfor);
    this.router.navigate(['/success']);
  }
}
