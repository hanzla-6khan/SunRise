import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [{
  path: '', component: AdminpannelComponent, children: [
    { path: 'home', canActivate:[AuthGuard], component: HomeComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'header', component: HeaderComponent },

    { path: '', redirectTo:'/admin/home', pathMatch:'full' },

] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
