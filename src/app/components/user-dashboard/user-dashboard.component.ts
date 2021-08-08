import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  userId:number
  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id
    console.log(this.userId)
  }

}
