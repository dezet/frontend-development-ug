import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PersonsComponent} from './persons/persons.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {PersonSearchComponent} from './person-search/person-search.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonDetailComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, PersonsComponent]
})
export class AppModule {
}
