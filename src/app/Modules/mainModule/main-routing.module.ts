import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeatursComponent } from './components/featurs/featurs.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ContactComponent } from './components/contact/contact.component';




const routes: Routes = [

  {
    path: '', component: MainPageComponent, children: [
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'courses', component: FeatursComponent },
     { path: 'trainers', component: HeroComponent },
      { path: 'events', component: WhyUsComponent },
      { path: 'contact', component: ContactComponent }



  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
