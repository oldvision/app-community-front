import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {LoginModel} from './models/loginModel';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel:LoginModel = new LoginModel();

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {

  }

  login(from: string){
    this.authService.signIn(from);
  }

  loginEmailPassword(){
      this.authService.signInEmailPassword(this.loginModel.email, this.loginModel.password);
  }

  register(){
    this.route.navigate(["register"]);
  }

}
