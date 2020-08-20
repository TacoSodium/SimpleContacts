import { Component, OnInit, EventEmitter } from '@angular/core';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  constructor(public contactService: ContactsService) { }

  ngOnInit(): void {
  }

  addContact() {
    
  }
}
