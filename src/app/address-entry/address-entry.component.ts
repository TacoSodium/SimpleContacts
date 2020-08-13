import { Component, OnInit, Input } from '@angular/core';
import { Contact } from "./Contact";

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.css']
})
export class AddressEntryComponent implements OnInit {

  @Input()
  contact: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
