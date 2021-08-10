import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FundTransfer } from 'src/app/shared/models/fund-transfer.model';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {


  // object to be binded with form of fund transfer
  fund:FundTransfer = new FundTransfer()

  constructor(private serviceUser:UserService) { }

  // store list of beneficiaries
  bList:any

  ngOnInit(): void {
    this.getTrList()
  }


  // submit transfer form
  submitTransferForm(amount:number, from:number, mode:string, remarks:string){
    // console.log(amount)
    // console.log(from)
    // console.log(mode)
    // console.log(remarks)
    this.serviceUser.fundTransfer(amount, from, mode, remarks).subscribe(
      data=>{
        console.log(data)
        if(data == "done"){
          alert("Transferred successfully")
        } else if(data == "insufficient funds"){
          alert("Insufficient funds")
        }
      },
      err=>{
        console.log(err)
        // if(err.error.text == "done"){
        //   alert("Transferred successfully")
        // } else if(err.error.text == "insufficient funds"){
        //   alert("Insufficient funds")
        // }  
      }
    )
  } 


  resetFields(){
    
  }

  // get list of transaction
  getTrList(){
    this.serviceUser.getTransactionList().subscribe((data)=>{
      console.log(data)
      this.bList = data
      console.log(this.bList)
    }, (err)=>{
      console.log(err)
    })
  }
}
