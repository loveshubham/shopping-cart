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
              private router:Router,private loginservice:LoginService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.userAuthservice.getToken())
      if(this.userAuthservice.getToken()!==null){
      const role=route.data
      console.log(role,21)

      if(role){
        console.log("23")
        const match =this.loginservice.roleMatch(role);
        console.log("23", match)
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
