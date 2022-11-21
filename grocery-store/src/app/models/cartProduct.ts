import { Product } from './product';

export class CartProduct extends Product {
  quantity: number;

  constructor(product: Product) {
    super();
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.url = product.url;
    this.description = product.description;
    this.quantity = 1;
  }
}
