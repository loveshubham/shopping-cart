import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
public setRoles(roles:any){
  localStorage.setItem("roles", roles)
}
public getRoles(){
  return localStorage.getItem("roles")
}
public setToken(accessToken:string){
   localStorage.setItem("accessToken", accessToken)
}
public getToken() {
  return  localStorage.getItem("accessToken")
}
public clear(){
 localStorage.clear();
}
public isloggedin(){
  // console.log(this.getRoles())
  // console.log(this.getToken())
  return this.getRoles() && this.getToken();


}
}
