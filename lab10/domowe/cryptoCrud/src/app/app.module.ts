import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {WalletComponent} from './wallet/wallet.component';
import {WalletDetailsComponent} from './wallet-details/wallet-details.component';
import {WalletSearchComponent} from './wallet-search/wallet-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CryptocurrencyService} from "./service/cryptocurrencyService";
import {WalletFormComponent} from './wallet-form/wallet-form.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    WalletDetailsComponent,
    WalletSearchComponent,
    WalletFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CryptocurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
