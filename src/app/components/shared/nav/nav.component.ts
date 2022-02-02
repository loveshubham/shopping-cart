import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../shoppingcart/models/cart-item';
import { LoginService } from '../../shoppingcart/services/login.service';
import { UserAuthService } from '../../shoppingcart/services/user-auth.service';
// import {cartItems} from '../../shoppingcart/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

// @Input() cartItems
  cartIT=CartItem;

  constructor(private userAuthservice:UserAuthService,
    private routes:Router ,
    public loginservice:LoginService) { }

  ngOnInit(): void {
    // console.log("16",this.cartIT)
  }
  public isLoggedin(){
    return this.userAuthservice.isloggedin();
  }
  public logout(){
    this.userAuthservice.clear();
    this.routes.navigate(['/shop']);
  }

}
