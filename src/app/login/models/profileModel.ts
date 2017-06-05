/**
 * Created by DarkVision on 2017-06-04.
 */

export class ProfileModel {

  private _name:string;

  get name(){
    return this._name;
  }

  set name(name:string){
    this._name = name;
  }
}
