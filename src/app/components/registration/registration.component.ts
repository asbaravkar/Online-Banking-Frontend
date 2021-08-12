import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    // vars
    obj:any = {}
    first_name : any
    middle_name : any
    Registration : FormGroup

  constructor(private serviceUser:UserService, private _location:Location) {
    this.Registration = new FormGroup(
      {
        title: new FormControl(null, [Validators.required]),
        firstName: new FormControl(null, [Validators.required]),
        middle_name: new FormControl(null, [Validators.required]),
        last_name: new FormControl(null, [Validators.required]),
        fathers_name: new FormControl(null, [Validators.required]),
        mobile_number: new FormControl(null, [Validators.required, Validators.pattern('^[7-9]\\d{9}$')]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        aadhar: new FormControl(null, [Validators.required, Validators.pattern('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$')]),
        pan_card: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]),
        pan_doc: new FormControl(null, [Validators.required]),
        dob: new FormControl(null, [Validators.required]),
        line_1: new FormControl(null, [Validators.required]),
        line_2: new FormControl(null, [Validators.required]),
        landmark: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        pin_code: new FormControl(null, [Validators.required]),
        type_of_address:new FormControl(null),
        line_1_residential:new FormControl(null),
        line_2_residential:new FormControl(null),
        landmark_residential:new FormControl(null),
        state_residential:new FormControl(null),
        city_residential:new FormControl(null),
        pin_code_residential:new FormControl(null),
        occupation_type: new FormControl(null, [Validators.required]),
        source_of_income: new FormControl(null, [Validators.required]),
        gross_annual_income: new FormControl(null, [Validators.required]),
        debit_card: new FormControl(null, [Validators.required]),
        net_banking: new FormControl(null, [Validators.required]),
        approval_status: new FormControl('Pending'),
      }
    )
   }




  ngOnInit(): void {
    
  }

    //to check if details entered are according to validation
    register()
    {
      if(this.Registration.valid){
  
  
        var dob = new Date(this.Registration.value.dob)
        var currentDate = new Date()
  
        if(currentDate.getFullYear() - dob.getFullYear() <= 18){
          alert("Age Should Be greater Than 18")
        }
        else{
          this.obj.title = this.Registration.value.title
          this.obj.firstName=this.Registration.value.firstName
          this.obj.middleName=this.Registration.value.middle_name
          this.obj.lastName=this.Registration.value.last_name
          this.obj.fathersName=this.Registration.value.fathers_name
          this.obj.mobileNumber=this.Registration.value.mobile_number
          this.obj.email=this.Registration.value.email
          this.obj.aadhar=this.Registration.value.aadhar
          this.obj.panCard=this.Registration.value.pan_card
          this.obj.panDoc=this.Registration.value.pan_doc
          this.obj.dob=this.Registration.value.dob
          this.obj.occupationType=this.Registration.value.occupation_type
          this.obj.sourceOfIncome=this.Registration.value.source_of_income
          this.obj.grossAnnualIncome=this.Registration.value.gross_annual_income
          this.obj.debitCard=this.Registration.value.debit_card
          this.obj.netBanking=this.Registration.value.net_banking
          this.obj.approvalStatus=this.Registration.value.approval_status
    
          this.obj.line1=this.Registration.value.line_1
          this.obj.line2=this.Registration.value.line_2
          this.obj.landmark=this.Registration.value.landmark
          this.obj.custState=this.Registration.value.state
          this.obj.city=this.Registration.value.city
          this.obj.pinCode=this.Registration.value.pin_code
          this.obj.typeOfAddress=this.Registration.value.type_of_address
    
          this.obj.line1_residential=this.Registration.value.line_1_residential
          this.obj.line2_residential=this.Registration.value.line_2_residential
          this.obj.landmark_residential=this.Registration.value.landmark_residential
          this.obj.custState_Residential=this.Registration.value.state_residential
          this.obj.city_residential=this.Registration.value.city_residential
          this.obj.pinCode_Residential=this.Registration.value.pin_code_residential
  
          console.log(this.obj)
          this.registerCust(this.obj)
        }
      }
      else
      {
        alert("There is some error in entered details")
      }
    }


  approval:any={}
  rand?:number
  data:any
  //to generate random number (SRN)
  generateSRN(cust_id:number){
    this.rand =+ ("" + Math.random()).substring(2,10);
    this.approval.cust_id = cust_id;
    this.approval.srn = this.rand;
    this.approval.alloted_to = null
  }


  registration_done= false;
  //check if the registration is successful or not. If successful, generate SRN, else throw exception message
  registerCust(obj:any)
  {
    debugger
    this.serviceUser.userRegistration(obj).subscribe(
      data=>{
        console.log(data)
        if(data == "inserted"){
          alert("Account opening process started. You'll recieve Reference number on registered email.")
          this._location.back()
        } else if(data == "error in sending mail"){
          alert("Error in sending email for Reference number to registered email")
        } else {
          alert("Something went wrong")
        }
      }
    )
  }


  //to check if permanent==resident
  Yes()
  {
    document.getElementById("Residential")?.style.display
    console.log("yes")
  }

  No()
  {
    document.getElementById("Residential")?.style.display
    console.log("no")
  }
}

