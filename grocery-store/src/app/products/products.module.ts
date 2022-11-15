import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
