import { RegisterInternetBanking } from './../../shared/models/register-internet-banking.model';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-cust-register-ib',
  templateUrl: './cust-register-ib.component.html',
  styleUrls: ['./cust-register-ib.component.css']
})
export class CustRegisterIbComponent implements OnInit {

  confirmPasswordValidation(control:AbstractControl):{[key: string]:boolean}|null{
    if(control.parent?.get('password')?.value !== control.value){
      return {'cpass':true}
    }
    return null;
  }

  constructor(public custservice:UserService) { }

  ngOnInit(): void {
  }


  // object to bind with register internet banking form
  ibRegister:RegisterInternetBanking = new RegisterInternetBanking()


  // register form internet banking
  registerInternetBanking(ibRegisterForm:NgForm){

  }


  // otp
  getOtp(){
    
  }
}
