import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import {Router} from "@angular/router";


@Injectable()
export class AuthService {

  constructor(private router:Router){

  };

  signUpEmailPassword(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      var errorCode = error.name;
      var errorMessage = error.message;
    })
  }


  signIn(from: string){
    this.router.navigate(['/']);
    firebase.auth().signInWithPopup(this.getProviderSignIn(from))
      .then(r =>
        this.router.navigate(['/']).then(
          r => location.reload(true)
        )
      ).catch(error =>
        this.router.navigate(['/login'])
    );
  }

  signOut(){
    firebase.auth().signOut().then(response =>
       this.router.navigate(['/login'])
    ).catch(function(error){
    });
  }

  private getProviderSignIn(from: string){
    switch(from){
      case "google": return new firebase.auth.GoogleAuthProvider();
      case "facebook": return new firebase.auth.FacebookAuthProvider();

    }
  }

  getTokenUser(){
    var user = firebase.auth().currentUser;
    console.log(user.getToken());
    if(user){
      console.log(user.getToken());
      return user.getToken();
    }else{
      console.log(user.getToken());
      return null;
    }
  }


  isAuthenticate(){
    var user = firebase.auth().currentUser;
    if(user != null){
      return true;
    }else{
      return false;
    }
  }


}
