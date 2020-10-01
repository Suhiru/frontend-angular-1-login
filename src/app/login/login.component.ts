import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import {RegistrationService} from '../registration.service'
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private registrationService :RegistrationService ) { }

  ngOnInit(): void {
  }

  loginUser(){
    
    this.registrationService.loginUserFromRemote(this.user).subscribe(
      response=>console.log("Successfull"),
      error=>console.log("exception occured")
    );
  }

}
