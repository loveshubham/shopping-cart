import { Component, OnInit } from '@angular/core';
import { MessengerService} from 'src/app/components/shoppingcart/services/messenger.service'
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { ProductAddComponent } from '../product-list/product-add/product-add.component';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartTotal=0
  product: any;
  constructor(private msg:MessengerService,
    private cartService:CartService) { }

    ngOnInit(): void {
      this.handleSubscription();
      this.loadCartItems();
      // console.log(this.cartItems)

    }
    handleSubscription(){
      this.msg.getMsg().subscribe((product:Product)=>{
        // console.log("29",product)
      this.loadCartItems()

      //this.addProductTocart(product)
    })

  }
  loadCartItems(){
    this.cartService.getCartItem().subscribe((items: CartItem[])=>{
      this.cartItems=items;
      this.calculateCartTotal();
      // console.log(this.cartItems)

    })
      
  }
  calculateCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach(items=>{
      this.cartTotal+=(items.qty*items.price)
    });
  }

  itemdelete(product:Product){
    //  OTHER LOGIC
    // console.log(product)
     const index= this.cartItems.indexOf(product)
     this.cartItems.splice(index,1)
     this.cartService.removeFromCart(product)

    // this.cartItems.map((a:any , index:any)=>{
    //   if(product.id===a.id){
    //     this.cartItems.splice(index,1)
    //   }
    // })
    // console.log(product)
    return this.cartService.removeFromCart(product)

  }
}



//   this.cartService.removeFromCart(product).subscribe(()=>{
//     this.cartService.sendMsg(this.product)

// }
    // this.removeFromCart(product)
    // removeFromCart(product:Product){
    //     return this.http.delete(cartUrl +'/'+ product)

    //   }

      //  handleRemoveFromwishlist(){
      //   this.wishlistService.removeFromWishlist(this.productItem).subscribe(()=>{
      //     this.addedTowishlist=false;
      //   })
      //   removeFromWishlist(productId:any){
      //     return this.http.delete(wishlistUrl +'/'+ productId)

      //   }


      //  this.removeFromCart(product)
      // }

      //  removeFromCart(product:Product){
      //   return this.cartService.delete(cartUrl +'/'+ product)






    //  todelete()
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

