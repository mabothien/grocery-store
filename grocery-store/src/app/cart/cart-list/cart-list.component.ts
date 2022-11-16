import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
   cartList: Product[] = []
   constructor(
     private ProductService: ProductService
   ) { }

   ngOnInit(): void {
     this.ProductService.getProductList().subscribe(res => this.cartList = res);
     console.log(this.cartList)
   }
}
