import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGonext]'
})
export class GonextDirective {
  @Input('appGonext') goNextId: string | any;
  @HostListener('click')
  click() {
   document.getElementById(this.goNextId)?.scrollIntoView({behavior:'smooth'})
  }
  // this directive is used in why us 

}
