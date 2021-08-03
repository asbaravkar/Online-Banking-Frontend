import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, public router:Router, public service:AdminService) { }

  ngOnInit(): void {
    
  }

  adminLogin(loginForm:NgForm){
    // below code is form demo purpose only
    if(loginForm.value.adminEmail == "admin@gmail.com" && loginForm.value.adminPassword == "Admin@1399") {
          alert("Admin login successful")
          sessionStorage.setItem('adminEmail', loginForm.value.adminEmail)
          this.router.navigate(['admin-dashboard'])
        } else {
          alert("Invalid credentials")
        }
  }
}
