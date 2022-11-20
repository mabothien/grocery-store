import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit {
  @Output() submit: EventEmitter<User> = new EventEmitter();
  personInfor: User = {
    fullName: '',
    address: '',
    totalPrice: 0,
    creditNumber: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submit.emit(this.personInfor);
  }
}
