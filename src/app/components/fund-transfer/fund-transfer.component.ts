import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
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

  fromAccNum:number

  // submit transfer form
  submitTransferForm(amount:number, from:number, mode:string, remarks:string){
    this.fromAccNum=amount
    this.serviceUser.fundTransfer(amount, from, mode, remarks).subscribe(
      data=>{
        console.log(data)
        if(data == "done"){
          alert("Transferred successfully")
        } else if(data == "invalid amount"){
          alert("Invalid amount")
        } else if(data == "insufficient funds"){
          alert("Insufficient funds")
        }
      },
      err=>{
        console.log(err)
         
      }
    )
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

  receipt:any
  // fetch transaction for receipt
  transactionReceipt(){
    
      this.serviceUser.transactionReceipt().subscribe(
        data=>{
          console.log(data)
          this.receipt=data
        }
      )
    }
  
}
