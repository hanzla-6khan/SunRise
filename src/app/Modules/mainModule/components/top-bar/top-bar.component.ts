import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
 showFiller = false;
  constructor(private dialog:MatDialog) { }
  openDialog() {
    this.dialog.open(ContactComponent)
  }
}
