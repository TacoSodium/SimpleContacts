import { Component, OnInit, Output, Input } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  constructor(public contactService: ContactsService) {
    this.contactService = contactService
  }

  ngOnInit(): void {
  }
}
