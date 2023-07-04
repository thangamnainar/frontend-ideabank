import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from './service.service';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { ForgotOtpComponent } from './forgot-otp/forgot-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// push Notification

import { environment } from "src/environments/environment";
import { initializeApp } from "firebase/app";

initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    VerifyOtpComponent,
    ForgotEmailComponent,
    ForgotOtpComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
