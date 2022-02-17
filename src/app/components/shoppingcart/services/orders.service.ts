import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const userorderurl='http://localhost:3001/api/orders';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  getorderItem(userId:any):Observable<any>{
    return this.http.get<any>(userorderurl +'/'+userId)
  }

}
