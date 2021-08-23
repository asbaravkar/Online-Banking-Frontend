import { Router } from '@angular/router';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent implements OnInit {

  constructor(public custservice:UserService, private router:Router) { }

  userSession:string
  ngOnInit(): void {
    this.userSession = localStorage.getItem('user')!
    if(this.userSession !='abc'){
      this.router.navigate(['login'])
    }
  }

  // Account Lock Tracker
  counter=3

  // login function
  doCustomerLogin(userId:number, password:string){
    this.custservice.userLogin(userId, password).subscribe((data)=>{
      // console.log(data)
      if(this.counter < 2){
        this.lockAccount(userId)
      }
      if(data == "login success"){
        alert("Sucessfully logged in")
        sessionStorage.setItem('user', userId.toString())
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
      // console.log(err)
      
    })
  }

  // Lock Account once attempts exceeded
  lockAccount(userId:number){
    this.custservice.lockAccount(userId).subscribe((data)=>{
      console.log(data)
    }, (err)=>{
      console.log(err)
    })
  }

}
