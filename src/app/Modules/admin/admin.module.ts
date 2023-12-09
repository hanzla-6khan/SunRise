import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatModule } from 'src/app/Appmodules/mat/mat.module';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [

    HomeComponent,
    HeaderComponent,

    AdminpannelComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class AdminModule { }
