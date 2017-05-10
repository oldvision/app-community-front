/**
 * Created by DarkVision on 2017-04-30.
 */


export class LoginModel {

    private _email:string;
    private _password:string

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

}
