import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Currency} from '../models/currency';
import {CryptocurrencyService} from "../service/cryptocurrencyService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.css']
})
export class WalletDetailsComponent implements OnInit {
  currency: Currency;

  constructor(private route: ActivatedRoute,
              private cryptocurrencyService: CryptocurrencyService) {

  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cryptocurrencyService.getCurrency(id).subscribe(currency => this.currency = currency)
  }

}
