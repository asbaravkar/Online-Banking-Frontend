import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account-details',
  templateUrl: './user-account-details.component.html',
  styleUrls: ['./user-account-details.component.css']
})
export class UserAccountDetailsComponent implements OnInit {

  constructor(private serviceUser:UserService) { }

  ngOnInit(): void {
    this.fetchDetails()
  }

  // fetch details
  fetchDetails(){
    this.serviceUser.fetchUserDetails().subscribe(
      data=>{
        console.log(data)
      }, err=>{
        console.log(err)
      }
    )
  }
}
