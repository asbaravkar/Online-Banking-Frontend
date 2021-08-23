import { Info } from './../../shared/models/info.model';
import { TrList } from './../../../../trList.model';
import { Statement } from './../../shared/models/statement.model';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account-statement',
  templateUrl: './user-account-statement.component.html',
  styleUrls: ['./user-account-statement.component.css']
})
export class UserAccountStatementComponent implements OnInit {

  constructor(private serviceUser:UserService) { }

  userId:number

  formStatement:Statement = new Statement()

  ngOnInit(): void {
    this.userId = this.serviceUser.userId
    this.getInfo()
  }

  info:Info = new Info()
  temp:any

  // To display Customer Detail - Basic
  getInfo(){
    this.serviceUser.getInfo().subscribe(
      data=>{
        // console.log(data)
        this.temp=data
        this.info = this.temp
      }
    )
  }

  ac:number
  obj:any
  trList:TrList[]=[]

  // Fetch Transaction between two dates
  fetchTransactions(from:string, to:string){
    this.ac = this.info.acno
    this.serviceUser.getTrRange(this.ac,from,to).subscribe(
      data=>{
        // console.log(data)
        this.obj=data
        this.trList=this.obj
      }
    )
  }

  // Restrict Date upto Current Date only
  currDate = new Date()

}
