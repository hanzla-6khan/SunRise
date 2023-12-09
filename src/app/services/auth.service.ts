import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

 
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  isLoggedIn() {
    return this.getToken() !== null;
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }


  login({ emailFormControl, passwordFormControl }: any): Observable<any> {
    if (emailFormControl === 'admin@gmail.com' && passwordFormControl === '123456789') {

      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'hani', emailFormControl: 'admin@gmail.com' });
    }

    return throwError(new Error('Failed tofdfdfdfdf login').message);
  }
}
