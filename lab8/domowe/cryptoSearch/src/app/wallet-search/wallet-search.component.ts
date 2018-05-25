import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Cryptocurrency} from "../models/cryptocurrency";

@Component({
  selector: 'app-wallet-search',
  templateUrl: './wallet-search.component.html',
  styleUrls: ['./wallet-search.component.css']
})
export class WalletSearchComponent implements OnInit {

  @Output() filteredCryptocurrencies = new EventEmitter<Cryptocurrency[]>();

  @Input() cryptocurrencies: Cryptocurrency[];

  searchControl: FormControl;

  constructor() {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.subscribe(
      searchTerm => {
        this.informParent(this.cryptocurrencies.filter(c => c.name.includes(searchTerm.toUpperCase())))
      }
    )
  }

  informParent(cryptocurrencies: Cryptocurrency[]) {
    this.filteredCryptocurrencies.emit(cryptocurrencies);
  }

  ngOnInit() {
  }

}
