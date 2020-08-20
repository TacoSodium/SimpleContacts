import { Injectable } from '@angular/core';

import { Contact } from '../address-entry/Contact';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  contacts: Contact[] = [
    new Contact("Mx", "Coryn Tyrrell", "Redacted", "http://4.bp.blogspot.com/-Bc_cYXdDzjQ/UK0DwYRHtZI/AAAAAAAAbX8/jl0aGI_GWOs/s1600/funny-cat-pictures-025-011.jpg"),
    new Contact("Dr", "Omar Knight", "20 Queen St, Melbourne", "https://destinationpanama.files.wordpress.com/2008/11/doctorsmall.jpg"),
    new Contact("Mr", "Alex Hyde", "20000A Button Rd, Space", "https://upload.wikimedia.org/wikipedia/commons/0/0d/Echinocactus_grusonii_1.jpg")
  ];

  onDelete(remove: Contact) {
    let selectedContact = this.contacts.indexOf(remove);
    this.contacts.splice(selectedContact, 1);
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
