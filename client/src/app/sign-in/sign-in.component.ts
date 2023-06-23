import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import {MessageService} from 'primeng/api'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {


  form:FormGroup= new FormGroup({
    email: new FormControl('',{
      validators:[Validators.required]
    }),
    password: new FormControl('',{
      validators:[Validators.required]
    })
  });


  constructor(private service:ServiceService,private fb:FormBuilder,private messageService:MessageService,private router:Router) {
    
  }

  onSubmit() {
    // console.log(this.form.value);
  }

  getLoginData(){
    if (this.form.valid){
      this.service.login(this.form.value).subscribe({
        next:(result)=>{
          console.log(result);
          this.router.navigate(['home']);
          this.show('success',result.message)
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
