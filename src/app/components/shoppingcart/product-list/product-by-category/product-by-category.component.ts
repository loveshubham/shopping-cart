import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../../filters/categories';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { MessengerService } from '../../services/messenger.service';
import { ProductService } from '../../services/product.service';
import { WishlistService } from '../../services/wishlist.service';


@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent implements OnInit {
  // [x: string]: any;

  searchCategory!:Categories;
  searchbyCategory!:Categories;
  searchTerm!:string;
  titles!:string;

@Input() productItem!: Product;
@Input() addedTowishlist!:boolean ;
product!: Product;
productD!:Product;
productList:Product[]=[]
// productD:Product[]=[];
myQty=new FormGroup({
  quantity:new FormControl('1')
})
constructor(
  private msg:MessengerService,
  private cartservice:CartService,
  private wishlistService:WishlistService,
  private router:Router,
  private activatedRoute:ActivatedRoute,
  private productservice:ProductService) { }

ngOnInit(): void
{
              // this is product by cagtegory slug
               // get the category from the url
    const categoryName = this.activatedRoute.snapshot.paramMap.get('category');
    const titleName = this.activatedRoute.snapshot.paramMap.get('title');

     // TODO: implement categoryService
     this.productservice.searchbycatproduct(this.searchbyCategory).subscribe(category => {
      if (!this.titles) {
        // this.router.navigateByUrl(`/category/${category.name}/${category.title}`);
        return;
      }

      // TODO: render the category
    });



  // This is product by category Id

  // this.activatedRoute.params.subscribe(data=>{
  //   this.searchCategory=data['id'];
  //   console.log("43",data['id'])
  //   this.productservice.searchbycatproduct(this.searchCategory).subscribe(categoryData=>{
  //     this.productList=categoryData;
  //     //  console.log("46",this.productList)
  //      console.log("47",this.searchCategory)
  //   })
  // })
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
