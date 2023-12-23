import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { timeout } from 'rxjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FormsModule } from '@angular/forms';




const material = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  ReactiveFormsModule,
  MatCardModule,
  MatMenuModule,
  MatExpansionModule,
  MatBadgeModule,
  MatDividerModule,
  MatListModule,
  MatDatepickerModule,
  FormsModule,
  MatCheckboxModule,
  MatSidenavModule,


  ToastrModule.forRoot({
    timeOut: 1000,
    progressAnimation: 'increasing',
    progressBar: true,
    preventDuplicates:true
  })


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material

  ],
  exports: [
    material
  ]
})
export class MatModule { }
