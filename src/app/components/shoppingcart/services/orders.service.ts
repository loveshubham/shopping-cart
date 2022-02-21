import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const userorderurl='http://localhost:3001/api/orders';
const delorderurl='http://localhost:3001/api/orders';
const orderstatus='http://localhost:3001/api/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  getorderItem(userId:any):Observable<any>{
    return this.http.get<any>(userorderurl +'/'+userId)
  }

  removeorder(orderId:any):Observable<any>{
    console.log("63",orderId)
    return this.http.delete<any>(delorderurl +'/'+ orderId)
  }
  orderstat(userId:any,status:any):Observable<any>{
    console.log("25",userId)
    return this.http.put<any>(orderstatus +'/'+ userId ,status)
  }

}
