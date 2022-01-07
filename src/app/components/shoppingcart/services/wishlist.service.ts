import { Injectable } from '@angular/core';
import { wishlistUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  subject =new Subject<Product>();
  constructor(private http:HttpClient) { }
  // addTowishlist(product: Product){
  //   console.log(product)
  // this.subject.next(product as Product)//triggering an event
  // }  
  // removeFromWishlist(){
  //   return this.subject.asObservable()
  // }
  

//   getWishlist(){
//     // return this.http.get(wishlistUrl).pipe(
//     //   map((result)=>{
//     //     let productIds: any[]=[]
//     //     result.forEach((item: { id: any; }) => productIds.push(item.id) )
//     //     return productIds;
//     //   })
//     // )
    
//   }

  addTowishlist(productId: Product){
    return this.http.post(wishlistUrl,{id:productId})

  }
  removeFromWishlist(productId:Product){
    return this.http.delete(wishlistUrl +'/'+ productId); 

  }

}