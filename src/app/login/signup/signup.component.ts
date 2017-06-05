import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../models/loginModel";
import {AuthService} from "../auth.service";
import {ProfileModel} from "../models/profileModel";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route:Router, private authService: AuthService) { }

  loginModel:LoginModel = new LoginModel();

  ngOnInit() {
  }

  sign(){
    this.route.navigate(['/login']);
  }

  signUP(){
    this.authService.createUserWIthEmailPassword(this.loginModel);
  }


}
