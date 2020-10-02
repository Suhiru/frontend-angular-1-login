import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import {RegistrationService} from '../registration.service'
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private registrationService :RegistrationService , private route : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    
    this.registrationService.loginUserFromRemote(this.user).subscribe(
      response=> {
        console.log("Successfull");
        this.route.navigate(['/loginsucess']);
      },
      error=>{
        
        console.log("exception occured");
        this.msg = "Bad credentials, Please enter a valid email addrress and a password";
     }

    );
  }

}
