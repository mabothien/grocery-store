import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'grocery-store';
  totalProduct = 0
  initvalue = 0
  constructor(private productService: ProductService) {}
  ngOnInit(): void {}

  amountProduct(): number {
    return this.productService.getAmountProduct();
  }

}
