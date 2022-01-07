import { Component, OnInit } from '@angular/core';
import { MessengerService} from 'src/app/components/shoppingcart/services/messenger.service'
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartTotal=0
  constructor(private msg:MessengerService,
              private cartService:CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    
    }
      handleSubscription(){
      this.msg.getMsg().subscribe((product:Product)=>{
      console.log(product)
      this.loadCartItems()
      
      //this.addProductTocart(product)
      })

      }
      loadCartItems(){
      this.cartService.getCartItem().subscribe((items: CartItem[])=>{
      this.cartItems=items;
      this.calculateCartTotal();
      console.log(this.cartItems)

      })

     }
     calculateCartTotal(){
     this.cartTotal = 0;
     this.cartItems.forEach(items=>{
     this.cartTotal+=(items.qty*items.price)
     });
     }
  }
    //     addProductTocart(product:Product)
    //     {
  //       // let productExists=false

  //       // for(let i in this.cartItems){
  //       //   if(this.cartItems[i].id===product.id){
  //       //     this.cartItems[i].qty++
  //       //     productExists=true
  //       //     break;
  //       //   }
  //       // }

  //       // if (!productExists){
  //       //   this.cartItems.push({
  //       //     id:product.id,
  //       //     name:product.name,
  //       //     qty:1,
  //       //     price:product.price
            
  //       //   });

  //       // }
  //   //     else{ 
  //   //       for(let i in this.cartItems){
  //   //             if(this.cartItems[i].id===product.id){
  //   //               this.cartItems[i].qty++
  //   //               break;
  //   //     }
  //   //   }
  //   // }
  //       // if (this.cartItems.length===0){

  //       //   this.cartItems.push({
  //       //     id:product.id,
  //       //     name:product.name,
  //       //     qty:1,
  //       //     price:product.price
  //       //   });
  //       // }
  //       // else{
  //       //   for(let i in this.cartItems){
  //       //     if(this.cartItems[i].id===product.id){
  //       //       this.cartItems[i].qty++
  //       //       break;
  //       //     }
  //       //     else{
              
  //       //   this.cartItems.push({
  //       //     id:product.id,
  //       //     name:product.name,
  //       //     qty:1,
  //       //     price:product.price
  //       //   });
  //       //     }
  //       //   }
  //       // }
  //     this.calculateCartTotal();
  //     }


    
