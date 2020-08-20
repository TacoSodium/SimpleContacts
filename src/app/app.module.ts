import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AddressEntryComponent } from './address-entry/address-entry.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AddressEntryComponent,
    ContactListComponent,
    ContactCreateComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
