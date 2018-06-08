import {Component, OnInit} from '@angular/core';
import {Currency} from "../models/currency";
import {CryptocurrencyService} from '../service/cryptocurrencyService';
import {Observable} from "rxjs/Observable";
import {interval} from "rxjs/observable/interval";
import {CryptoEvent} from "../event/crypto-event"

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallet: Currency[];

  selectedCurrency: Currency;

  filteredWallet: Currency[];

  onSelect(currency: Currency) {
    this.selectedCurrency = currency;
  }

  onCryptocurrenciesFiltered(cryptocurrencies: Currency[]) {
    this.filteredWallet = cryptocurrencies;
  }

  onAdd(eventType: CryptoEvent) {
    this.getCurrencies();
  }

  getCurrencies(): void {
    this.cryptocurrencyService.getCurrencies().subscribe(_ => {
      this.filteredWallet = this.wallet = _;
      if (typeof(this.selectedCurrency) != "undefined") {
        this.selectedCurrency = this.wallet.find(c => c.id == this.selectedCurrency.id);
      }
    });
  }

  constructor(private cryptocurrencyService: CryptocurrencyService) {
  }

  ngOnInit() {
    this.getCurrencies();
  }

  onDelete(cryptocurrency: Currency) {
    this.cryptocurrencyService.deleteCurrency(cryptocurrency).subscribe(_ => {
      this.cryptocurrencyService.getCurrencies().subscribe(_ => {
        this.filteredWallet = this.wallet = _;
      })
    });
  }

}
