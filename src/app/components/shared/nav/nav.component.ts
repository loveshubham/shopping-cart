import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../../shoppingcart/models/cart-item';
import { CartService } from '../../shoppingcart/services/cart.service';
import { LoginService } from '../../shoppingcart/services/login.service';
import { UserAuthService } from '../../shoppingcart/services/user-auth.service';
import { UserService } from '../../shoppingcart/services/user.service';
// import {cartItems} from '../../shoppingcart/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

// @Input() cartItems
  cartIT=CartItem;
  userlist:any;
  userId: any;
  userdet:any;
  cartItems:any;
  constructor(private userAuthservice:UserAuthService,
    private routes:Router ,
    public loginservice:LoginService,
    private cartservice:CartService,

    private activatedRoute:ActivatedRoute,
    public userservice:UserService) { }

  ngOnInit(): void {
    // console.log("16",this.cartIT)
    this.activatedRoute.params.subscribe(data=>{
      this.userId=data['id'];
      console.log(this.userId)
      this.userservice.getdetails(this.userId).subscribe((data)=>{
        this.userdet=data;
        console.log(this.userdet)
      });
    })
     this.loadCartItems();
  }
  public isLoggedin(){
    return this.userAuthservice.isloggedin();
  }
  public logout(){
    this.userAuthservice.clear();
    this.routes.navigate(['/login']);
  }
  loadCartItems(){
    this.cartservice.getCartItem().subscribe((items:any)=>{
      this.cartItems=items;

      console.log(this.cartItems)
      console.log(this.cartItems.Users.length)

    })

  }

}
