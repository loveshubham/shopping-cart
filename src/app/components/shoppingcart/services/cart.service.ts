import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from 'src/app/components/shoppingcart/config/api';
import { Product } from '../models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  cartItems: any;

  constructor(private http:HttpClient) { }
  getCartItem():Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[])=>{
        let cartItems:CartItem[]=[];

        for (let item of result){
          let productExists=false

        for(let i in cartItems){
          if(cartItems[i].productId===item.product.id){
            cartItems[i].qty++
            productExists=true
            break;
          }
        }

        if (!productExists){
          cartItems.push(
            new CartItem(item.id,
             item.product));

        }
        }

        return cartItems;
      })

    );
  }
  addProductsToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl,{product});
  }
  removeFromCart(productId:Product){
    return this.http.delete(cartUrl +'/'+ productId)

  }
}
