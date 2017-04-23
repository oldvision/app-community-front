import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";

@Injectable()
export class AuthService {


  signUp(from: string){

    firebase.auth().signInWithPopup(this.getProviderSignIn(from)).then(function(result){

    }).catch(function(error){

    });

  }

  private getProviderSignIn(from: string){
    switch(from){
      case "google": return new firebase.auth.GoogleAuthProvider();
      case "facebook": return new firebase.auth.FacebookAuthProvider();
    }
  }


  checkUserAuthenticate(){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        return true;
      }else{
        return false;
      }
    });
  }


}
