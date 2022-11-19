import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit {
  personInfor = {
    fullName: '',
    address: '',
    creditNumber: '',
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['/success']);
    this.productService.clearCart();
  }
}
