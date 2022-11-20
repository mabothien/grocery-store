import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  user = {} as User
  constructor(
    private router: Router,
    private productservice: ProductService
  ) {
    this.user = {
      fullName: '',
      address: '',
      totalPrice: 0,
      creditNumber: ''
    }

  }

  ngOnInit(): void {
    if (localStorage.getItem('user_information')) {
      this.user = JSON.parse(localStorage.getItem('user_information') || '');
    }
  }

  gotoBack() {
    this.productservice.clearCart()
    this.router.navigate(["/"])
  }
}
