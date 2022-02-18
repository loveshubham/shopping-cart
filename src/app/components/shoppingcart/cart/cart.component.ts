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
  deleted:any;
  popup!:boolean;
  model:any={}


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

  itemdelete(productId:any){
    const index= this.cartItems.indexOf(productId)
    this.cartItems.splice(index,1)
    this.loadCartItems()

  }


  deletetodo(product:any){
    console.log(product)
    this.cartService.empty(product).subscribe(data=>{
      this.deleted=data;
    })
    window.location.reload();

  }

  orders(){
    let Address={
      address:this.model.Address,
      total:this.cartTotal
     };
    console.log(Address)
    console.log(this.cartTotal)

     this.cartService.addcarttoorderhistory(Address).subscribe(()=>{
        })
        window.location.reload();
}


}
