import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

const RegisterUrl='http://localhost:3001/api/auth/register'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  Addregisterdetail(user:any):Observable<Register>{
    return this.http.post<Register>(RegisterUrl , user);

}
userAuthentication(email:any,password:any){
  var data="email="+email+"password="+password+"&grant_type=password";
  var reqHeader=new HttpHeaders({'content-Type':'application/x-www-urlencoded'});
  return this.http.post(RegisterUrl,'/token'
  //  ,data
  //  ,{headers:reqHeader}
  )

}
}
