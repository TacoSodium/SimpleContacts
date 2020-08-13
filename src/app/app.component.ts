import { Component } from '@angular/core';
import { Contact } from './address-entry/Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showContacts: boolean = true;
  contacts: Contact[] = [
    let contact1 = new Contact("Mx", "Coryn Tyrrell", "Redacted", "http://4.bp.blogspot.com/-Bc_cYXdDzjQ/UK0DwYRHtZI/AAAAAAAAbX8/jl0aGI_GWOs/s1600/funny-cat-pictures-025-011.jpg"),
    
  ];

  onToggleContacts() {
    this.showContacts = !this.showContacts;
  }
}
