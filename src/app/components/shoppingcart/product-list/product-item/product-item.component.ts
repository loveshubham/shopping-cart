import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/components/shoppingcart/models/product';
import{ MessengerService} from 'src/app/components/shoppingcart/services/messenger.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;
  addedTowishlist:boolean=false
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
    this.wishlistService.addTowishlist(this.productItem).subscribe(()=>{
      this.addedTowishlist=true;
    })

  }
  handleRemoveFromwishlist(){
    this.wishlistService.removeFromWishlist(this.productItem).subscribe(()=>{
      this.addedTowishlist=false;
    })

  }

}
