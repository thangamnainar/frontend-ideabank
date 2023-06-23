import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import {MessageService} from 'primeng/api'
import { HttpErrorResponse } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  form:FormGroup= new FormGroup({
    password: new FormControl('',{
      validators:[Validators.required]
    }),
    // confirmpassword: new FormControl('',{
    //   validators:[Validators.required]
    // })
  });

  constructor(private service:ServiceService, private router:Router, private messageService:MessageService,private aRoute:ActivatedRoute){}

  getLoginData(){
    if (this.form.valid){
      const email=localStorage.getItem('email');
      const otp=this.aRoute.snapshot.paramMap.get('otp');
      this.service.resetPassword(this.form.value,email,otp).subscribe({
        next:(result)=>{
          console.log(result);
          this.show('success',result.message)
          this.router.navigate(['signIn']);
        },error:(error:HttpErrorResponse)=>{
          console.log(error);
          this.show('error',error.error.message)
        }
      })

    }else{
      this.show('error','Please Enter valid data')
    }
  }

  show(type: 'success' | 'error', message: string) {
    this.messageService.add({ severity: type,  detail: message });
  }
}
