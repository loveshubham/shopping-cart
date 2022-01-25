import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

const RegisterUrl='http://localhost:3000/register'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  Addregisterdetail(productBody:any):Observable<Register>{
    return this.http.post<Register>(RegisterUrl , productBody);

}
}
