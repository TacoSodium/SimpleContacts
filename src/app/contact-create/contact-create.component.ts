import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../address-entry/Contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  constructor(public contactService: ContactsService) { }

  ngOnInit(): void {
  }

  createContact(title: string, name: string, address: string) {
    if (name === "" || address === "") {
      alert("Fields cannot be empty");
    } else {
      this.contactService.addContact(new Contact(title, name, address, "https://upload.wikimedia.org/wikipedia/commons/0/0d/Echinocactus_grusonii_1.jpg"));
    }
  }
}
