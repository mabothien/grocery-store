import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';



@NgModule({
  declarations: [
    CartListComponent,
    CheckoutFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
