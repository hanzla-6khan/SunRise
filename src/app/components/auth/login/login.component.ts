import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  faLock = faLock;
  myForm: FormGroup | any;

  constructor(private fb: FormBuilder ,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get emailFormControl() {
    return this.myForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.myForm.get('passwordFormControl');
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.auth.login(this.myForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['./admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    } else {

      this.myForm.markAllAsTouched();
    }
  }
}
