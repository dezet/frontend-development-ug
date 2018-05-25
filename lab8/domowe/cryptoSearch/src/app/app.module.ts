import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {WalletComponent} from './wallet/wallet.component';
import {WalletDetailsComponent} from './wallet-details/wallet-details.component';
import {WalletSearchComponent} from './wallet-search/wallet-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    WalletDetailsComponent,
    WalletSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
