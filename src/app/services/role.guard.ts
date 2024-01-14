import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: any, state: any): boolean {

    const hasPermission =  true;

    if (hasPermission) {
      return true; // Allow navigation
    } else {
      window.alert('Unauthorized access!');

      this.router.navigate(['/login']);
      return false; // Prevent navigation
    }
  }
}
