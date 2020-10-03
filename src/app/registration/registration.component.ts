import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private registrationService :RegistrationService , private route : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.registrationService.registerUserFromRemote(this.user).subscribe(
      response =>{
        console.log("Successfull");
        this.route.navigate(['/registrationsucess']);
      },
      error =>{console.log("exception occured");
      this.msg = "User already exists";}

    );
  }

}
