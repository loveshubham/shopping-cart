import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
public setRoles(roles:[]){
  localStorage.setItem("roles",JSON.stringify(roles))
}
// public getRoles():[]{
//   return JSON.parse(localStorage.getItem('roles'))
// }
public setToken(jwtToken:string){
  return localStorage.setItem("jwtToken", jwtToken)
}
public getToken() {
  return  localStorage.getItem("jwtToken" )
}
public clear(){
  return  localStorage.clear();
}
// public islogedin(){
//   return this.getRoles()&& this.getToken();

// }

}
