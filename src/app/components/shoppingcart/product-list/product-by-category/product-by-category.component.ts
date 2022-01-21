import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../../filters/categories';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { MessengerService } from '../../services/messenger.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent implements OnInit {

  searchCategory!:Categories;
  @Input() productItem!: Product;
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
  private router:Router,
  private activatedRoute:ActivatedRoute) { }

ngOnInit(): void {
  this.activatedRoute.queryParams.subscribe(data=>{
    this.searchCategory=data['id'];
  })
  this.loadProductd()
  console.log("30",this.productItem)
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
