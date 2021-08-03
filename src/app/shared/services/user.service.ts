
import { Injectable } from '@angular/core';
import { CustomerLogin } from '../models/cust-login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // object of customerLogin to bind data with customer login form
  customer:CustomerLogin = new CustomerLogin()

  constructor() { }
}
