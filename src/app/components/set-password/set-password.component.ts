import { setPassword } from './../../shared/models/set-password.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {


  // object to be binded with set new password form
  set:setPassword = new setPassword()


  constructor() { }

  ngOnInit(): void {
  }


  // set password
  setPassword(){
    
  }

}
