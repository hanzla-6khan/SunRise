import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faCoffee = faCoffee;
  constructor(public dialog: MatDialog){}
  open() {
    this.dialog.open(LoginComponent);
  }
}
