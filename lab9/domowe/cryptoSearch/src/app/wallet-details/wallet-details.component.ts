import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Currency} from '../models/currency';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.css']
})
export class WalletDetailsComponent implements OnInit {
  @Input() currency: Currency;

  constructor() {
  }

  ngOnInit() {
  }

}
