import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "../login/auth.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }


  sign(){
    this.route.navigate(['/login']);
  }

  dashboard(){
    this.route.navigate(['/management']);
  }

  signOut(){
    this.authService.signOut();
  }

  isAuthenticate(){
    return this.authService.isAuthenticate();
  }
}
