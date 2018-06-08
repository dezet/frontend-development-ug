import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {CryptocurrencyService} from "../service/cryptocurrencyService";
import {Currency} from "../models/currency";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CryptoEvent} from "../event/crypto-event"
import {Subject} from "rxjs/Subject";
import {CustomValidators} from '../validators/CustomValidators';

@Component({
  selector: 'app-wallet-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css']
})
export class WalletFormComponent implements OnInit, OnChanges {

  onChanges = new Subject<SimpleChanges>();

  constructor(private fb: FormBuilder, private cryptocurrencyService: CryptocurrencyService) {
  }

  @Input() currency: Currency;
  @Output() eventEmitter = new EventEmitter<CryptoEvent>();
  currencyForm: FormGroup;

  ngOnInit() {
    this.currencyForm = this.fb.group({
      'id': this.fb.control(''),
      'name': this.fb.control('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])),
      'price': this.fb.control(0.0, Validators.compose([Validators.required, CustomValidators.numberValidator])),
      'amount': this.fb.control(0.0, Validators.compose([Validators.required, CustomValidators.numberValidator])),
      'walletAddress': this.fb.control('', Validators.compose([Validators.required, CustomValidators.addressValidator]))
    });
    this.onChanges.subscribe((data: SimpleChanges) => {
      this.currencyForm.patchValue({
        id: data.currency.currentValue.id,
        amount: data.currency.currentValue.amount,
        name: data.currency.currentValue.name,
        price: data.currency.currentValue.price,
        walletAddress: data.currency.currentValue.walletAddress
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges.next(changes);
  }


  mySubmit(form) {
    if (form.valid) {
      let currency = new Currency(
        this.currencyForm.controls['id'].value != '' ?
          this.currencyForm.controls['id'].value : Math.floor(Math.random() * 100) + 1,
        this.currencyForm.controls['name'].value,
        this.currencyForm.controls['price'].value,
        this.currencyForm.controls['walletAddress'].value,
        this.currencyForm.controls['amount'].value
      );
      if (this.currencyForm.controls['id'].value != '')
        this.cryptocurrencyService.updateCurrency(currency).subscribe(_ => this.eventEmitter.emit(CryptoEvent.updated));
      else
        this.cryptocurrencyService.addCurrency(currency).subscribe(_ => this.eventEmitter.emit(CryptoEvent.added));
      this.resetForm();
    }
  }

  resetForm() {
    this.currencyForm.reset({
      id: '',
      name: '',
      price: 0.0,
      walletAddress: '',
      amount: 0.0
    })
  }
}
