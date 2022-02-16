import { Component, OnInit , Input, Output ,EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  // [x: string]: any;
  counter: number = 1;
  itemCount:number=0;
  model:any;
  carttotal:any;
  carttotals:any;
  productId:any;
  products:any;

@Input() cartItem:any
 @Output() todelete:EventEmitter<Product>=new EventEmitter();
  constructor(private cartservice:CartService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.cartItem)

   }
  deletetodo(product:Product){
    this.todelete.emit(product);
    // console.log(product)
    this.cartservice.removeFromCart(product).subscribe(viewData=>{
    this.products=viewData});

    window.location.reload();



  }
  // public emptyCart(): void {
  //   this.cartservice.empty();
  // }

  onDecrement(){
    if(this.cartItem.quantity==1){
      return this.cartItem.quantity;
    }
    else{

      this.cartservice.decreasecartquant(this.cartItem.product.productId._id).subscribe(data=>{
          console.log(data)
        })
        // this.loadcarts();
        window.location.reload();
       return this.cartItem.quantity--;

    }
    // return this.cartItem.quantity;
  }

  onIncrement(){
    this.cartservice.increasecartquant(this.cartItem.product.productId._id ).subscribe(data=>{
      console.log(data)
    })
    // this.loadcarts();
    window.location.reload();
   return this.cartItem.quantity++;
  }
  // updatecart(){
  //   console.log(this.model)
  //   let newproduct={
  //     quantity:this.model.quantity
  //   };
  //   console.log(newproduct);
  //   // window.alert('You want to decrease the quantity ');
  //   // this.cartservice.increasecartquant(newproduct).subscribe(data=>{
  //     console.log(data)
  //   })

  // }
  // loadcarts(){
  //   this.cartservice.getCartItem().subscribe((data)=>{

  //     this.carttotal= data;
  //     this.carttotal.forEach((items:any)=>{
  //       console.log(items)
  //       // this.items.sub
  //     this.carttotals = (items.product.subtotal)
  //     });
  //     console.log(this.carttotals)
  //   })
  //   return this.carttotals;

  // }
  }

