import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {CryptocurrencyService} from "../service/cryptocurrencyService";
import {Currency} from "../models/currency";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CryptoEvent} from "../event/crypto-event"
import {Subject} from "rxjs/Subject";
import {CustomValidators} from '../validators/CustomValidators';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-wallet-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css']
})
export class WalletFormComponent implements OnInit {


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private cryptocurrencyService: CryptocurrencyService) {
  }

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
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.cryptocurrencyService.getCurrency(id).subscribe(currency => {
        this.currencyForm.patchValue({
          id: currency.id,
          amount: currency.amount,
          name: currency.name,
          price: currency.price,
          walletAddress: currency.walletAddress
        });
      })
    }

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
        this.cryptocurrencyService.updateCurrency(currency).subscribe();
      else
        this.cryptocurrencyService.addCurrency(currency).subscribe();

      this.resetForm();
      this.router.navigateByUrl('/kurrency')

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
