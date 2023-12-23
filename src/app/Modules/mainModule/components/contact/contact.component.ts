import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faLock = faLock;
  myForm: FormGroup | any;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toastr: ToastrService) { }

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
          this.toastr.success('login successfully !', 'Success');

          this.router.navigate(['./admin']);
          this.myForm.close()
        },
        (err: Error) => {
          this.toastr.error('invalid credentials !', 'failed');
        }
      );
    } else {

      this.myForm.markAllAsTouched();
    }
  }
}
