import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from "./Contact";
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.css']
})

export class AddressEntryComponent implements OnInit {

  @Input()
  contact: Contact;

  @Output()
  onDelete = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteContact(remove: Contact) {
    this.onDelete.emit(remove);
  }
}
