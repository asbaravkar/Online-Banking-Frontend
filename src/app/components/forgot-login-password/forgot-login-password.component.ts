import { Component, OnInit } from '@angular/core';
import { forgotLoginPassword } from 'src/app/shared/models/forgot-login-password.model';

@Component({
  selector: 'app-forgot-login-password',
  templateUrl: './forgot-login-password.component.html',
  styleUrls: ['./forgot-login-password.component.css']
})
export class ForgotLoginPasswordComponent implements OnInit {


  // object of forgot-login-password to bind with form
  forgot:forgotLoginPassword = new forgotLoginPassword()


  constructor() { }

  ngOnInit(): void {
  }


  getOtp(){

  }


  goToSetNewPassword(){
    
  }

}
