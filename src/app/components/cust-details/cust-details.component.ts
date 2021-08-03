import { RegisterAccount } from './../../shared/models/register-account.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css']
})
export class CustDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:AdminService) { }

  custId:number
  customer:RegisterAccount = new RegisterAccount()

  
  ngOnInit(): void {
    this.custId = this.route.snapshot.params.id
    this.getAccount(this.custId)
  }


  // get particular account details
  getAccount(custId:number){
    this.customer = this.service.getParticularAccountDetails(custId)
  }


  // send approval
  sendApproval(){
    
  }

  // reject approval
  rejectApproval(){

  }
}
