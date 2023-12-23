import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective implements OnInit {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  onclick() {
    window.scrollTo({top:0 ,behavior:'smooth'})
    }
ngOnInit(): void {

}
}
