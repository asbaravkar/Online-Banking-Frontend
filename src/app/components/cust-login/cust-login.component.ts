import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent implements OnInit {

  constructor(public custservice:UserService) { }

  ngOnInit(): void {

  }


  // login function
  doCustomerLogin(custLoginForm:NgForm){
    
  }

}
