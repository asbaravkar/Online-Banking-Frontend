import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public router:Router, public service:AdminService) { }

  adminSession:string
  ngOnInit(): void {
    // this.adminSession = localStorage.getItem('admin')!
    if(localStorage.getItem('admin')! !='abc'){
      this.router.navigate(["admin-login"])
    }
  }

  adminLogin(loginForm:NgForm){
    this.service.adminLogin(loginForm.value.adminEmail, loginForm.value.adminPassword).subscribe((data)=>{
      console.log(data);
      if(data=="invalid id"){
        alert("Invalid ID")
      } else if(data == "invalid password"){
        alert("Invalid password")
      } else if(data == "something went wrong"){
        alert("Something went wrong")
      }else {
        alert("Successfully Logged in")
        sessionStorage.setItem('admin', loginForm.value.adminEmail)
        this.router.navigate([`admin-dashboard/${loginForm.value.adminEmail}`])
      }
    }, (err)=> {
      console.log(err)
     
    })
  }
}
