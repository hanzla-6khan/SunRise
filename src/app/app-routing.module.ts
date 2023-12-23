import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'main', loadChildren: () => import('./Modules/mainModule/main.module').then((m) => m.UserModule) },

  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./Modules/admin/admin.module').then((m) => m.AdminModule) },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
  // lazy load the adminmodules over here




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
