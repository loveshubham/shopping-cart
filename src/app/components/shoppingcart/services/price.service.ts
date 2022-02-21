import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

function _window():any{
  return window;
}

const payUrl='http://localhost:3001/api/payment/order';
const getpayresponse='http://localhost:3001/api/payment/verify';

@Injectable({
  providedIn: 'root'
})
export class PriceService {


  get nativeWindow():any{
    return _window();
  }
  itemRef : any;
  // constructor(private db: AngularFireDatabase) { }
  constructor(private http:HttpClient) { }


  // getPrice() {
  //   this.itemRef =  this.db.list('/price').snapshotChanges().pipe
  //   (map(changes => { return changes.map(c => ({ key: c.payload.key,
  //     ...c.payload.val() }));
  //   }));
  //   return this.itemRef;
  // }

  payproduct(productBody:any):Observable<any>{
    return this.http.post<any>(payUrl, productBody);

  }
  payresponse(data:any):Observable<any>{
    return this.http.post<any>(getpayresponse, data);
  }


}


