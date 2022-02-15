import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { UserAuthService } from "./shoppingcart/services/user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{
  constructor(private userAuthservice:UserAuthService ,
    private router:Router){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if(req.headers.get('No-Auth')==='True'){
    //   return next.handle(req.clone());
    // }
    const token = this.userAuthservice.getToken();
    // console.log("22",token)
    req=this.addToken(req,token);
      // console.log("25",req)
    return next.handle(req).pipe(
      catchError(
        (err:HttpErrorResponse)=>{
          console.log(err.status);
          if(err.status===401){
            this.router.navigate(['/login']);
          }else if(err.status===403){
            this.router.navigate(['/forbidden'])
          }
          return throwError("something is wrong");
        }
      )
    );
  }
  private addToken(request:HttpRequest<any>, token:any){
    return request.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }

    });
  }
}
