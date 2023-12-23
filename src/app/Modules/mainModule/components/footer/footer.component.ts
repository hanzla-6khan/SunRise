import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    console.log(this.el)
    // this.el.nativeElement.style.backgroundColor = 'red',
    //   this.el.nativeElement.style.width = '200%'
  }
}
