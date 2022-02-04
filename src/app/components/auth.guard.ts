import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './shoppingcart/services/login.service';
import { UserAuthService } from './shoppingcart/services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthservice:UserAuthService,
    private router:Router,
    private loginservice:LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userAuthservice.getToken()!==null){
      const role=route.data
      if(role){
        const match =this.loginservice.roleMatch(role);
        if (match){
          return true;
        }
        else{
          this.router.navigate(['/login']);
          return false;
        }
      }

    }
    this.router.navigate(['/login'])
    return true;
  }

}
