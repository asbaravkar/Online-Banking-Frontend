import { Receipt } from './../../shared/models/receipt.model';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FundTransfer } from 'src/app/shared/models/fund-transfer.model';
import Swal from 'sweetalert2'

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

  receipt:Receipt
  temp:any
  // fetch transaction for receipt
  transactionReceipt(){
    
      this.serviceUser.transactionReceipt().subscribe(
        data=>{
          console.log(data)
          this.temp=data
          this.receipt = this.temp
        }
      )
    }
  
    
    sweetAlert(){
      this.transactionReceipt()
      Swal.fire({
        title: 'Receipt',
        html:`  <div class="row mt-3">
        <div class="col">
            Paid To Account:
        </div> 
        <div class="col">
            ${this.receipt.paidToAccNum}
        </div>
    </div>
    <div class="row mt-3">
        <div class="col">
            Amount :
        </div> 
        <div class="col">
            ${this.receipt.amount}
        </div>
    </div>
    <div class="row mt-3">
        <div class="col">
            On
        </div>
        <div class="col">
            ${this.receipt.transTime}
        </div> 
    </div>
    <div class="row mt-3">
        <div class="col">
            Remarks :
        </div>
        <div class="col">
            ${this.receipt.remark}
        </div> 
    </div>`
      }).then((result) => {
        if (result.isConfirmed) {
          
        
        }
      })
    }

}
