import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.css']
})
export class AddressEntryComponent implements OnInit {

  @Input()
  imgSource: string = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Echinocactus_grusonii_1.jpg"
  title: string = "Title";
  name: string = "Name";
  address: string = "Address";

  constructor() { }

  ngOnInit(): void {
  }

}
