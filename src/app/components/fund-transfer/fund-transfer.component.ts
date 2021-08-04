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

  constructor() { }

  ngOnInit(): void {
  }


  // submit transfer form
  submitTransferForm(form:NgForm){
    console.log(form.value)
  }


  resetFields(){
    
  }
}
