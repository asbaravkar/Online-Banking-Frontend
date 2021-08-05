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

  constructor() { }

  ngOnInit(): void {
  }


  addBeneficiary(form:NgForm){
    console.log(form.value)
  }
}
