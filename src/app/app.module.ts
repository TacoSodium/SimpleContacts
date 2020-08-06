import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AddressEntryComponent } from './address-entry/address-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AddressEntryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
