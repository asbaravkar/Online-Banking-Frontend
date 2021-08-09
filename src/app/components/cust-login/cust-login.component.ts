import { Router } from '@angular/router';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent implements OnInit {

  constructor(public custservice:UserService, private router:Router) { }

  ngOnInit(): void {

  }

  counter=2

  // login function
  doCustomerLogin(userId:number, password:string){
    this.custservice.userLogin(userId, password).subscribe((data)=>{
      console.log(data)
      if(this.counter <= 1){
        this.lockAccount(userId)
      }
      if(data == "login success"){
        this.router.navigate(['dashboard/', userId] )
      } else if(data == "wrong password"){
        this.counter--
        alert(`${this.counter} attempts left`)
      } else if(data == "invalid user id"){
        alert("Invalid user ID")
      } else if(data == "account locked"){
        alert("Account locked. Please use forgot password")
      }
    }, (err)=> {
      console.log(err)
      // if(this.counter <= 1){
      //   //send req to lock
      //   this.lockAccount(userId)
      // }
      // if(err.error.text == "login success"){
      //   this.router.navigate(['dashboard/', userId] )
      // } else if(err.error.text == "wrong password"){
      //   this.counter--
      //   alert(`${this.counter} attempts left`)
      // }else if(err.error.text == "invalid user id") {
      //   alert("Invalid user id")
      // } else if(err.error.text =="account locked"){
      //   alert("Account locked. Please use forgot password")
      // }
    })
  }

  lockAccount(userId:number){
    this.custservice.lockAccount(userId).subscribe((data)=>{
      console.log(data)
    }, (err)=>{
      console.log(err)
    })
  }

}
