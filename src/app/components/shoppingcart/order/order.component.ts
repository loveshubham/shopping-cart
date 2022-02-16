import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cartItems:any = [];


  constructor(private msg:MessengerService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.loadCartItems();

  }


loadCartItems(){
this.cartService.getorderItem().subscribe((items:any)=>{
  this.cartItems=items;
  console.log(this.cartItems)

})
}
}
