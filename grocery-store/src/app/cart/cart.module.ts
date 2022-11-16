import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartListComponent,
    CheckoutFormComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
  ]
})
export class CartModule { }
