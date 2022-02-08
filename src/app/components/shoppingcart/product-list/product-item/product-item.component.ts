import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/shoppingcart/models/product';
import { MessengerService} from 'src/app/components/shoppingcart/services/messenger.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!:any;
  // @Input() productItem!: Product;
  @Input() addedTowishlist!:boolean ;

  product!: Product;
  productD!:Product;
  // productD:Product[]=[];
  myQty=new FormGroup({
    quantity:new FormControl('1')
  })
  constructor(
    private msg:MessengerService,
    private cartservice:CartService,
    private wishlistService:WishlistService,
    private router:Router) { }

  ngOnInit(): void {
    console.log("30",this.productItem)
    this.loadProductd()
  }
  handleAddToCart(){
    this.cartservice.addProductsToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })

  }
  handleAddToWishlist(){
    this.wishlistService.addTowishlist(this.productItem.title).subscribe(()=>{
      this.addedTowishlist=true;
      // console.log(this.productItem)
    })

  }
  handleRemoveFromwishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.title).subscribe(()=>{
      this.addedTowishlist=false;
    })

  }
  myQuant(){
    console.log(this.myQty.value)
  }
  loadProductd(){
    this.productD=this.productItem
  }
  // getDetail(){

  // }
  // detailview(productItem: any){
  //   console.log(productItem)
  //   this.router.navigate(['productdetail'], { state: { productItem:productItem } });

  // }

}
