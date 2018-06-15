import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {WalletComponent} from './wallet/wallet.component';
import {WalletFormComponent} from './wallet-form/wallet-form.component';
import {WalletDetailsComponent} from './wallet-details/wallet-details.component';

const routes: Routes = [
  {path: 'kurrency', component: WalletComponent},
  {path: 'kurrency/add', component: WalletFormComponent},
  {path: 'kurrency/edit/:id', component: WalletFormComponent},
  {path: 'kurrency/:id', component: WalletDetailsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
