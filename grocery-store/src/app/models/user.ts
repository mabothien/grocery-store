export class User {
  fullName: string;
  address: string;
  totalPrice: number;
  creditNumber: string;

  constructor() {
    this.fullName = '',
    this.address = '',
    this.totalPrice = 0,
    this.creditNumber = ''
  }
}
