import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../shoppingcart/models/cart-item';
// import {cartItems} from '../../shoppingcart/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
// @Input() cartItems
  cartIT=CartItem;

  constructor() { }

  ngOnInit(): void {
    // console.log("16",this.cartIT)
  }

}
