import {ProfileModel} from "./profileModel";
/**
 * Created by DarkVision on 2017-04-30.
 */


export class LoginModel {

    private $key:string;
    private _email:string;
    private _password:string
    private _profile: ProfileModel = new ProfileModel();

    get key(){
      return this.$key;
    }

    set key(key:string){
      this.$key = key;
    }

    get email(){
      return this._email;
    }

    set email(email:string){
      this._email = email;
    };

    get password(){
      return this._password;
    }

    set password(password:string){
      this._password = password;
    };

    get profile(){
      return this._profile;
    }

    set profile(profile: ProfileModel){
      this._profile = profile;
    }

}
