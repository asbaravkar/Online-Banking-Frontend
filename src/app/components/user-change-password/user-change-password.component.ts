import { changePassword } from './../../shared/models/user-change-password.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {


  // object of changePassword to be bind with user-change-password form
  change:changePassword = new changePassword()
  

  constructor() { }

  ngOnInit(): void {
  }


  // change password
  changePassword(form:NgForm){
    console.log(form.value)
  }

}
