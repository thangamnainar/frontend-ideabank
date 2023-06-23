import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api'
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private sevice: ServiceService,private router:Router,private messageService:MessageService) { }

  form: FormGroup = new FormGroup({
    userName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    }),

  });

  getFormValue() {
    if (this.form.valid) {
      console.log('form is valid');
      console.log(this.form);
      localStorage.setItem('email', this.form.value.email);
      this.sevice.postData(this.form.value).subscribe({
        next: (response) => {
          console.log(response);
          this.show('success',response.message)
          this.router.navigate(['verify-otp']);
        }, error: (error:HttpErrorResponse) => {
          this.show('error',error.error.message)
          console.log(error);
        }
      })
      console.log(this.form.value);
    } else {
      // alert('Please Enter valid data')
      this.show('error','Please Enter valid data')
    }
  }

  show(type: 'success' | 'error', message: string) {
    this.messageService.add({ severity: type,  detail: message });
  }


}
