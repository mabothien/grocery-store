import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductItemComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
})
export class ProductsModule {}
