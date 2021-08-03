import { RegisterAccount } from './../../shared/models/register-account.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accountList:RegisterAccount = new RegisterAccount()

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    // use service to fetch list of unapproved accounts list
  }

}
