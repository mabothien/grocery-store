import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  numbers: Array<number> = []
  quantity = new FormControl(0)
  product: Product = {
    id :0,
    name :"",
    price :0,
    url :"",
    description :"",
  }
  productId: string = ''
  constructor(
    private router: ActivatedRoute,
    private cartService: CartService,
    private ProductService: ProductService
  ) {
   }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.productId = params['id'];
    });
    this.numbers = Array(10).fill(0).map((x,i)=>i);
    this.ProductService.getProductById(parseInt(this.productId)).subscribe((res: Product[]) => {
      this.product = res[0]
    });
    console.log(this.product)
  }

  addToCart() {
    this.cartService.addToCart()
  }


}
