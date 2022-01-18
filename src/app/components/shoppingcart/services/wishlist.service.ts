import { Injectable } from '@angular/core';
import { wishlistUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { WishItem } from '../models/wish-item';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {


  constructor(private http:HttpClient) { }
  getwishlistitems(){
    return this.http.get<Product[]>(wishlistUrl)
    .pipe(map((result:any[])=>{
        console.log('result 21', result);
        let productIds: any[]=[]


        result.forEach((item: { id: any; }) => productIds.push(item.id) )
        return productIds;
      })
    )

  }


  addTowishlist(productId: any){
    return this.http.post(wishlistUrl,{ id:productId })


  }
  removeFromWishlist(productId:any){
    return this.http.delete(wishlistUrl +'/'+ productId)

  }

}
