import { UserService } from './../../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serviceUser:UserService) { }

  userId:number
  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id
    this.getName(this.userId)
    console.log(this.userId)
  }

  nameOnDashboard:string
  obj:any
  // name on dashboard
  getName(userId:number){
    this.serviceUser.getName(userId).subscribe(
      data=>{
        console.log(data)
        this.obj = data
        console.log(this.obj.fname)
        this.nameOnDashboard=this.obj
      }
    )
  }
}
