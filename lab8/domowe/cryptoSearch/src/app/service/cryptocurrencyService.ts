import {Injectable} from '@angular/core';
import {CRYPTOCURRENCIES} from '../models/mock-cryptocurrency'
import {Cryptocurrency} from "../models/cryptocurrency";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class CryptocurrencyService {

  constructor() {
  }

  getCryptocurrencies(): Observable<Cryptocurrency[]> {
    return of(CRYPTOCURRENCIES);
  }

}
