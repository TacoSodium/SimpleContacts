import { Component, Output, Input } from '@angular/core';
import { Contact } from './address-entry/Contact';
import { AddressEntryComponent } from './address-entry/address-entry.component';
import { Title } from '@angular/platform-browser';
import { ContactListComponent } from './contact-list/contact-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showContacts: boolean = true;
  toggleContacts: string;

  onToggleContacts() {
    this.showContacts = !this.showContacts;

    if (this.showContacts == true) {
      this.toggleContacts = "Hide Contacts";
    } else {
      this.toggleContacts = "Show Contacts";
    }
  }
}
