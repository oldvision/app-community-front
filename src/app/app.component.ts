import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCLAk_tVbjN5InDNzigd1bQG5qlKmt8Q78",
      authDomain: "app-community-sign.firebaseapp.com",
      databaseURL: "https://app-community-sign.firebaseio.com",
      projectId: "app-community-sign",
      storageBucket: "app-community-sign.appspot.com",
      messagingSenderId: "889051590813"
    });
  }
}
