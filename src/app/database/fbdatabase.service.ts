import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {LoginModel} from "../login/models/loginModel";
import {Router} from "@angular/router";


@Injectable()
export class FbdatabaseService {



  constructor(private router:Router) { }


  insertNewUser(loginModel:LoginModel){
    firebase.database().ref().child("users/" + loginModel.key).child("profile/").set({
              name:loginModel.profile.name
        }).then(r =>
            this.router.navigate(['/']).then(
              r => location.reload(true)
            )
      ).catch(function(error){
          r => console.log(error)
      });
  }

}
