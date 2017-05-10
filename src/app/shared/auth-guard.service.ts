import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../login/auth.service";
import {Injectable} from "@angular/core";
/**
 * Created by DarkVision on 2017-05-09.
 */

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.isAuthenticate();
  }

}
