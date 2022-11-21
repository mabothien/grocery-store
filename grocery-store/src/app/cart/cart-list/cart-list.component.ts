import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/models/cartProduct';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartList: CartProduct[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    this.cartList = await this.productService.getCartProduct();
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

  removeProduct(product: CartProduct) {
    this.productService.clearProduct(product);
  }

  onSubmitForm(userInfor: User) {
    userInfor.totalPrice = Number(this.totalPrice());
    this.router.navigate(['/success']);
  }

  isEmpty() {
    return !this.cartList.length;
  }
}
