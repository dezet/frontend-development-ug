export class Currency {

  constructor(id: number, name: string, price: number, walletAddress: string, amount: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.walletAddress = walletAddress;
    this.amount = amount;
  }

  id: number;
  name: string;
  price: number;
  walletAddress: string;
  amount: number;
}
