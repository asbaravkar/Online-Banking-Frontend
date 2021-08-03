import { RegisterAccount } from './../models/register-account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminLogin } from '../models/admin-login.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  // object of AdminModel
  admin:AdminLogin = new AdminLogin()
  
  //object of RegisterModel
  customer:RegisterAccount = new RegisterAccount()


  // fill after backend api is active
  baseUrl:string=""


   // list of unapprovedRegisterAccount objects
   unapprovedAccountList:RegisterAccount[] = []


  // get list of all unapproved and non-rejected accounts
  getUnapprovedAccountList(){
    
  }





  // accept approval
  sendApproval(){
    
  }


  // reject approval
  rejectApproval(){

  }



  // return particular account
  getParticularAccountDetails(custId:number):any{
    // let customer:RegisterAccount = new RegisterAccount()
    // this.unapprovedAccountList.forEach(cust => {
    //   if(cust.customerId === custId){
    //     customer = cust
    //   }
    //   return customer
    // });
  }
}
