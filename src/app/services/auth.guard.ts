import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PagenotfoundComponent } from "../components/pagenotfound/pagenotfound.component";



@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  userRole = 'user'
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.userRole !== 'admin') {
      this.router.navigate(['./PagenotfoundComponent'])

    }
    return true
  }

}
