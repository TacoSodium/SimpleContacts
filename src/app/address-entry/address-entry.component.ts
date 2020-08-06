import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.css']
})
export class AddressEntryComponent implements OnInit {

  @Input()
  source: string = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Echinocactus_grusonii_1.jpg"
  @Input()
  title: string = "Title";
  @Input()
  name: string = "Name";
  @Input()
  address: string = "Address";

  constructor() { }

  ngOnInit(): void {
  }

}
