import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindetails } from '../models/logindetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl='http://localhost:3001/api/auth/login'
  // const loginUrl='http://localhost:3000/Login'
  requestHeader= new  HttpHeaders(
  {"No-auth":"True"}
  );
  constructor(private http:HttpClient ,
    private userauth:UserAuthService) {   }
  Addlogindetail(user:any):Observable<Logindetails>{
    return this.http.post<Logindetails>(this.loginUrl , user , {headers:this.requestHeader});

}
// public rolematch (allowedRole:any)
// {
// let ismatch=false;
// const userroles = this.userauth.getRoles();
// if(userroles===allowedRole){
//   ismatch=true;
// }
// else{
//   return ismatch=false;
// }
// }

loggedIn(){
  return !!localStorage.getItem('token')

}
}
