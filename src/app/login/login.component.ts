import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {LoginModel} from './models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel:LoginModel = new LoginModel();

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  login(from: string){
    this.authService.signUp(from);
  }

  loginEmailPassword(){
      this.authService.signUpEmailPassword(this.loginModel.email, this.loginModel.password);
  }

}
