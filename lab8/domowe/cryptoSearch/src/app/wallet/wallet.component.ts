import {Component, OnInit} from '@angular/core';
import {Cryptocurrency} from "../models/cryptocurrency";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallet: Cryptocurrency[];

  selectedCurrency: Cryptocurrency;

  filteredWallet: Cryptocurrency[];

  onSelect(currency: Cryptocurrency) {
    this.selectedCurrency = currency;
  }

  onCryptocurrenciesFiltered(cryptocurrencies: Cryptocurrency[]) {
    this.filteredWallet = cryptocurrencies;
  }

  constructor() {
    this.wallet = this.filteredWallet = [
      {id: 1, name: 'BTC', price: 1000.23, walletAddress: 'jdle21sj3l', amount: 10.0},
      {id: 1, name: 'BTC', price: 1000.23, walletAddress: 'jdl321sj4l', amount: 1000.0},
      {id: 2, name: 'XTC', price: 123.00, walletAddress: 'xlsk3jam3l', amount: 10.0},
      {id: 3, name: 'LTC', price: 321.321, walletAddress: 'zan2j3laowp', amount: 10.0},
      {id: 4, name: 'DOGE', price: 1000000.100000, walletAddress: 'ak3laprmw2', amount: 10.0}
    ]
  }

  ngOnInit() {
  }

}
