import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }


  //logout
  adminLogout(){
    alert("Successfully logged out")
    this.router.navigate(['admin-login'])
  }

}
