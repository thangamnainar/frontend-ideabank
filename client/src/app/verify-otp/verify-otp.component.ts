import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit{

  email:any;

  constructor(private service:ServiceService,private router:Router,private messageService:MessageService) { }

  ngOnInit(): void {
    this.email=localStorage.getItem('email');
  }

  formFieldGroup:FormGroup= new FormGroup({
    verifyotp: new FormControl('',[Validators.required]),
  });

  getOtp(){
   if(this.formFieldGroup.valid){
    this.service.verify(this.formFieldGroup.value.verifyotp,this.email).subscribe({
      next:(response)=>{
        console.log(response);   
        if(response.status){
        this.router.navigate(['signIn']);
        this.show('success',response.message)
        }     
      },error:(error:HttpErrorResponse)=>{
        console.log(error);
       this.show('error',error.error.message)
      }      
    })
   }else{
     this.show('error','Please Enter valid Data')
    }

  }

  show(type: 'success' | 'error', message: string) {
    this.messageService.add({ severity: type,  detail: message });
  }

  
}
