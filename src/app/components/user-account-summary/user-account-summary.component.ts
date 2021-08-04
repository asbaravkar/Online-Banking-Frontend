import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-user-account-summary',
  templateUrl: './user-account-summary.component.html',
  styleUrls: ['./user-account-summary.component.css']
})
export class UserAccountSummaryComponent implements OnInit {


  // list to hold recent transaction and loop over
  recent:Transaction[] = []

  constructor() { }

  ngOnInit(): void {
    // this.recent = this.getTransactionList()
  }


  // get list of top 5 transaction
  getTransactionList(){

  }

}
