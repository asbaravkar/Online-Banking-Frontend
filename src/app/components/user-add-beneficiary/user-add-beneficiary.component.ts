import { UserService } from './../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiary } from './../../shared/models/add-beneficiary.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-add-beneficiary',
  templateUrl: './user-add-beneficiary.component.html',
  styleUrls: ['./user-add-beneficiary.component.css']
})
export class UserAddBeneficiaryComponent implements OnInit {

  // object of add beneficiary to be bind with
  payee:Beneficiary = new Beneficiary()

  constructor(private route:ActivatedRoute, private serviceUser:UserService, private router:Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id)
  }


  addBeneficiary(name:string, to1:number, to2:number){
    // debugger
    // console.log(to1)
    // console.log(to2)
    this.serviceUser.addBeneficiary(name, to1, to2).subscribe((data)=>{
      console.log(data)
    }, (err)=>{
      console.log(err)
      if(err.error.text == "added"){
        alert("Beneficiary added")
      } else if(err.error == "already present"){
        alert("Already present")
      } else {
        alert("Account number didn't matched")
      }
    })
  }
}
