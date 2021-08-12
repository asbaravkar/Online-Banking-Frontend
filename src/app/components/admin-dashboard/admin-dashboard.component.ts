import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router, private service:AdminService, private route:ActivatedRoute) { }

 adminId:number
  ngOnInit(): void {
    this.adminId = this.route.snapshot.params.id
  }

  

  //logout
  adminLogout(){
    alert("Successfully logged out")
    this.router.navigate(['admin-login'])
  }

}
