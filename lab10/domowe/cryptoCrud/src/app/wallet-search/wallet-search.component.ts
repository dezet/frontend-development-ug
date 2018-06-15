import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Currency} from "../models/currency";


@Component({
  selector: 'app-wallet-search',
  templateUrl: './wallet-search.component.html',
  styleUrls: ['./wallet-search.component.css']
})
export class WalletSearchComponent implements OnInit, OnChanges {

  @Output() filteredCryptocurrencies = new EventEmitter<Currency[]>();

  @Input() cryptocurrencies: Currency[];

  searchControl: FormControl;

  constructor() {
    this.searchControl = new FormControl();
  }

  informParent(cryptocurrencies: Currency[]) {
    this.filteredCryptocurrencies.emit(cryptocurrencies);
  }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(
      searchTerm => {
        this.informParent(this.cryptocurrencies.filter(c => c.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())))
      }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cryptocurrencies = changes.cryptocurrencies.currentValue;
  }

}
