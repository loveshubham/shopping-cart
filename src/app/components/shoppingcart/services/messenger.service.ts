import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject =new Subject<Product>();

  constructor() { }
  sendMsg(product: Product){
    // console.log("13",product)
  this.subject.next(product as Product)//triggering an event
  }
  getMsg(){
    return this.subject.asObservable()
  }
}
