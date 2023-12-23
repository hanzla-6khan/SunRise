import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, shareReplay } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StayWander';

  constructor(private breakpointObserver: BreakpointObserver) { }


  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset);


}
