import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";

@Injectable()
export class AuthService {

  token : string;

  signUpEmailPassword(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      var errorCode = error.name;
      var errorMessage = error.message;
    })
  }


  signUp(from: string){

    firebase.auth().signInWithPopup(this.getProviderSignIn(from)).then(function(result){
        this.token = result.credential.accessToken;
    }).catch(function(error){
      var errorCode = error.name;
      var errorMessage = error.message;
    });

  }

  signOut(){
    firebase.auth().signOut().then(function(){

    }).catch(function(error){

    });
  }

  private getProviderSignIn(from: string){
    switch(from){
      case "google": return new firebase.auth.GoogleAuthProvider();
      case "facebook": return new firebase.auth.FacebookAuthProvider();
    }
  }

  getTokenUser(){
    firebase.auth().currentUser.getToken().then((token:string) => this.token = token);
    return this.token;
  }


  isAuthenticate(){
      return this.token != null;
  }


}
