import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindetails } from '../models/logindetails';
import { HttpClient } from '@angular/common/http';


const loginUrl='http://localhost:3000/Login'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {   }
  Addlogindetail(productBody:any):Observable<Logindetails>{
    return this.http.post<Logindetails>(loginUrl , productBody);

}
}
