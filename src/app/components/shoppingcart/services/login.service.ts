import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindetails } from '../models/logindetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const loginUrl='http://localhost:3001/api/auth/login'
// const loginUrl='http://localhost:3000/Login'
const requestHeader= new  HttpHeaders(
{"No-auth":"True"}
)
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {   }
  Addlogindetail(user:any):Observable<Logindetails>{
    return this.http.post<Logindetails>(loginUrl , user , {headers:requestHeader});

}
loggedIn(){
  return !!localStorage.getItem('token')
}
}
