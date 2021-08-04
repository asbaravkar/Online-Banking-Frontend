import { forgotUserId } from './../../shared/models/forgot-id.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {


  // object of forgotUserId to bind with form
  forgot:forgotUserId = new forgotUserId()


  constructor() { }

  ngOnInit(): void {
  }


  getOtp(){

  }

  sendMail(){
    //mail containing user id and redirect back to login
  }

}
