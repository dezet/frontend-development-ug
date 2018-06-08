import {Injectable} from '@angular/core';
import {CRYPTOCURRENCIES} from '../models/mock-cryptocurrency'
import {Currency} from "../models/currency";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class CryptocurrencyService {
  readonly url: string;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
    this.url = '/currency';
  }

  getCurrencies(): Observable<Currency[]> {
    let url = `${this.url}`;
    return this.http.get<Currency[]>(url).pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<Currency[]>())
    );
  }

  updateCurrency(currency: Currency): Observable<Currency> {
    let url = `${this.url}/${currency.id}`;
    return this.http.put<Currency>(url, currency, this.httpOptions).pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<Currency>())
    );
  }

  addCurrency(currency: Currency): Observable<Currency> {
    let url = `${this.url}`;
    return this.http.post<Currency>(url, currency, this.httpOptions).pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<Currency>())
    );
  }

  deleteCurrency(currency: Currency): Observable<Currency> {
    let url = `${this.url}/${currency.id}`;
    return this.http.delete<Currency>(url).pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<Currency>())
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
