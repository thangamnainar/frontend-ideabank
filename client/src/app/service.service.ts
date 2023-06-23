import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { };

  postData(data: any) {
    console.log('service', data);
    const nestUrl = 'http://localhost:3000/user/createUser';
    return this.http.post<any>(nestUrl, data);
  }
  verify(otp: any, email: any) {
    console.log('service', otp);
    const nestUrl = 'http://localhost:3000/user/verifyOtp';
    return this.http.put<any>(nestUrl, { verifyotp: otp, email: email });
  }

  login(data: any) {
    console.log('service', data);
    const nestUrl = 'http://localhost:3000/user/login';
    return this.http.post<any>(nestUrl, data);
  }

  //forgot password

  getMail(email: any) {
    const Url = 'http://localhost:3000/user/getMail';
    return this.http.post<any>(Url, email);
  }

  verifyMailOtp(otp: any,email:any) {
    const Url = 'http://localhost:3000/user/verifyOtpForgotPassword';
    return this.http.put<any>(Url, {verifyotp:otp,email:email});
  }

  resetPassword(value: any,email:any,otp:any) {
    const Url = 'http://localhost:3000/user/resetPassword';
    console.log({password:value.password, confirm_password:value.confirm_password, email:email, otp:otp},'service');    
    return this.http.put<any>(Url, {password:value.password,email:email,otp:otp});
  }

  signUpReSendMail(email: any){
    const Url = 'http://localhost:3000/user/signUpReSendMail';
    return this.http.put<any>(Url, {email: email});
  }

  reSendMail(email: any){
    const Url = 'http://localhost:3000/user/reSendMail';
    console.log({email:email},'service');    
    return this.http.put<any>(Url, {email:email});
  }

  // search

  getUsers(){
    const Url = 'http://localhost:3000/user/getall';
    return this.http.get<any>(Url);
  }

  userQuestion(searchQuery: any){
    const Url = 'http://localhost:3000/user/getall';
    console.log(Url,'service');
    
    return this.http.get<any>(Url+"?search="+searchQuery);
  }

  //get from gender table

  getGender(){
    const Url = 'http://localhost:3000/user/getGender';
    return this.http.get<any>(Url);
  }

  //get from district table

  getDistrict(){
    const Url = 'http://localhost:3000/user/getDistrict';
    return this.http.get<any>(Url);
  }
}
