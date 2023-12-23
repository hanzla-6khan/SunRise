import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './main-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatModule } from 'src/app/Appmodules/mat/mat.module';
import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FeatursComponent } from './components/featurs/featurs.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomdDirective } from './Deractives/customd.directive';
import { ScrollTopDirective } from './Deractives/scroll-top.directive';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    MainPageComponent,
    TopBarComponent,
    HeroComponent,
    AboutUsComponent,
    WhyUsComponent,
    FeatursComponent,
    FooterComponent,
    CustomdDirective,
    ScrollTopDirective,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    UserRoutingModule
  ]
})
export class UserModule { }
