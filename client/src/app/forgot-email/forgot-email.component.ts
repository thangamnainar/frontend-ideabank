import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import {MessageService} from 'primeng/api'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent {

  form:FormGroup= new FormGroup({
    email: new FormControl('',{
      validators:[Validators.required]
    })
  });


  constructor(private service:ServiceService, private router:Router, private messageService:MessageService){}

  getLoginData(){
    if (this.form.valid){
      localStorage.setItem('email',this.form.value.email);
      this.service.getMail(this.form.value).subscribe({
        next:(response)=>{
          console.log(response);
          if(response.status){
            this.show('success',response.message)
            this.router.navigate(['forgot-otp']);
          }
        
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
