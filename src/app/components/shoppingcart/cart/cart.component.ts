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
      this.itemdelete(this.product);
      // console.log(this.cartItems)

    }
    handleSubscription(){
      this.msg.getMsg().subscribe((product:any)=>{
        console.log("29",product)
      this.loadCartItems()

      //this.addProductTocart(product)
    })

  }
    loadCartItems(){
    this.cartService.getCartItem().subscribe((items:any)=>{
      this.cartItems=items;
      this.calculateCartTotal();
      console.log(this.cartItems)

    })

  }
  calculateCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach((items)=>{
      console.log(items)
    this.cartTotal += (items.subtotal)
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
    this.cartService.removeFromCart(this.product).subscribe((deletedata)=>{

      console.log("product to delete")
    })

  }
}



