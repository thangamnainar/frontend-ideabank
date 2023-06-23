import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { MessageService } from 'primeng/api'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-otp',
  templateUrl: './forgot-otp.component.html',
  styleUrls: ['./forgot-otp.component.scss']
})
export class ForgotOtpComponent {

  form: FormGroup = new FormGroup({
    verifyotp: new FormControl('', {
      validators: [Validators.required]
    })
  });

  constructor(private service: ServiceService, private router: Router, private messageService: MessageService) { }

  getOtp() {
    if (this.form.valid) {
      const email = localStorage.getItem('email');
      this.service.verifyMailOtp(this.form.value.verifyotp, email).subscribe({
        next: (response) => {
          console.log(response);
          if (response.status) {
            this.show('success', response.message)
            this.router.navigate(['forgot-password', this.form.value.verifyotp]);
          }
        }, error: (error: HttpErrorResponse) => {
          console.log(error);
          this.show('error', error.error.message);
        }
      })

    } else {
      this.show('error', 'Please Enter valid data')
    }
  }

  show(type: 'success' | 'error', message: string) {
    this.messageService.add({ severity: type, detail: message });
  }

}
