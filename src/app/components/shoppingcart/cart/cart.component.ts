import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MessengerService} from 'src/app/components/shoppingcart/services/messenger.service'
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { ProductAddComponent } from '../product-list/product-add/product-add.component';
import { CartService } from '../services/cart.service';
import { PriceService } from '../services/price.service';
import { WindowRefService } from '../services/window-ref.service';




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
  paymentresponse:any;
  paymentstarted=false;
  newresponse:any;
  razorpay_order_id:any
razorpay_payment_id:any;
razorpay_signature:any;
sendresponseform:any;


  constructor(private msg:MessengerService,
    private cartService:CartService,
    private priceservice:PriceService,
    private winref:WindowRefService,
    private router:Router) { }

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
    this.loadCartItems()
    this.router.navigate(['/shop']);

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
makepayment(event:any){
  let Address = {

    "amount": this.cartTotal*100
  //   "recipient_name":this.obj.reciepient_name,
  //   "recipient_email":this.obj.reciepient_email,
  //   "user_email":this.obj.your_email,
  //   "user_name":this.obj.your_name
  }
  console.log("98",Address)
  this.priceservice.payproduct(Address).subscribe((data)=>{
    this.paymentresponse=data;
    console.log(data)
    // this.payWithRazor(data);
  })
    this.paymentstarted=true;
  // this.priceservice.payproduct(Address).open()
  // this.getpayresponse();

  }



  payWithRazor(val:any) {
    const options: any = {
      amount:this.cartTotal , // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      order_id: val.sub.id, // order_id created by you in backend
      modal: {
        escape: false,
      },

      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response: any, error: any) => {
      options.response = response;
      this.newresponse=response;
      console.log(response);
      console.log(options);
      this.msg.sendMsg(this.newresponse);
      this.sendresponse();

      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
      alert("payment cancelled");
      this.router.navigate(['/cart']);

      // this.loadCartItems();

    });
    const rzp = new this.winref.nativeWindow.Razorpay(options);
    rzp.open();
    // this.sendresponse();



}
  sendresponse(){
    console.log(this.newresponse)
    let sendresponseform = {

      razorpay_order_id:this.newresponse.razorpay_order_id,
      razorpay_payment_id:this.newresponse.razorpay_payment_id,
      razorpay_signature:this.newresponse.razorpay_signature,
    }
    console.log(sendresponseform)
  this.priceservice.payresponse(sendresponseform).subscribe((data)=>{
    console.log(data)
  })

  this.msg.sendMsg(this.newresponse);
  this.orders();


  this.router.navigate(['/orders']);


  }


}
