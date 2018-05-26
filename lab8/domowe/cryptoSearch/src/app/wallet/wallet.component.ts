import {Component, OnInit} from '@angular/core';
import {Cryptocurrency} from "../models/cryptocurrency";
import {CryptocurrencyService} from '../service/cryptocurrencyService';

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

  getCryptocurrencies(): void {
    this.cryptocurrencyService.getCryptocurrencies().subscribe(currencies => this.wallet = this.filteredWallet = currencies);
  }

  constructor(private cryptocurrencyService: CryptocurrencyService) {
  }

  ngOnInit() {
    this.getCryptocurrencies();
  }

}
