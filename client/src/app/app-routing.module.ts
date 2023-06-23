import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { ForgotOtpComponent } from './forgot-otp/forgot-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
  {
    path:'signIn',component:SignInComponent
  },
  {
    path:'signUp',component:SignUpComponent
  },
  {
    path:'verify-otp',component:VerifyOtpComponent
  },
  {
    path:'forgot-email',component:ForgotEmailComponent
  },
  {
    path:'forgot-otp',component:ForgotOtpComponent
  },
  {
    path:'forgot-password/:otp',component:ForgotPasswordComponent
  },
  {
    path:'home',loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
