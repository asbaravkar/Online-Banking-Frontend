import { trackStatus } from './../../shared/models/track-status.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // object of track status to bind with form
  track:trackStatus = new trackStatus()
  

  constructor() { }

  ngOnInit(): void {
  }

  // otp to track status by srn
  getOtp(){

  }

  // check status
  trackStatus(){

  }

}
