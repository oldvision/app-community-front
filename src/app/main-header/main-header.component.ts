import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  sign(){
    this.route.navigate(['/login']);
  }

  dashboard(){
    this.route.navigate(['/management']);
  }
}
