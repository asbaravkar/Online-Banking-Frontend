import { UserService } from './../../shared/services/user.service';
import { changePassword } from './../../shared/models/user-change-password.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {


  // object of changePassword to be bind with user-change-password form
  change:changePassword = new changePassword()
  

  constructor(private serviceUser:UserService) { }

  ngOnInit(): void {
  }


  // change password
  changePassword(lp:string, clp:string, tp:string, ctp:string){
    this.serviceUser.changePassword(lp, clp, tp, ctp).subscribe(
      data=>{
        console.log(data)
      }, err=>{
        console.log(err)
        if(err.error.text == "changed"){
          alert("Password changed successful")
        } else if(err.error.text == "login password not matched"){
          alert("Login password didn't matched")
        } else if(err.error.text == "transaction password not matched"){
          alert("Transaction Password didn't matched")
        }
      }
    )
  }

}
