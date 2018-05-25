import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cryptocurrency} from '../models/cryptocurrency';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.css']
})
export class WalletDetailsComponent implements OnInit {
  @Input() cryptocurrency: Cryptocurrency;

  constructor() {
  }

  ngOnInit() {
  }

}
