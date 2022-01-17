import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  @Input() productItem!: Product;
  @Input() addedTowishlist!:boolean ;
  product!: Product;
  myQty=new FormGroup({
    quantity:new FormControl('1')
  })
  constructor(
    private msg:MessengerService,
    private cartservice:CartService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.cartservice.addProductsToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })

  }
  handleAddToWishlist(){
    this.wishlistService.addTowishlist(this.productItem.id).subscribe(()=>{
      this.addedTowishlist=true;
      // console.log(this.productItem)
    })

  }
  handleRemoveFromwishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=>{
      this.addedTowishlist=false;
    })

  }
  myQuant(){
    console.log(this.myQty.value)
  }

}
