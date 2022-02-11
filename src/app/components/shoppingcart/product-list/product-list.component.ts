import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { WishlistService } from '../services/wishlist.service';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList:any;
  // productList:Product[]=[];
  wishlist:any[]=[]
  searchTerm!:string
  page:number=1;

  constructor(private productService:ProductService ,
    private wishlistService:WishlistService

    ){ }

    ngOnInit(): void {
      // this.onScroll()
      this.loadProducts()
      this.loadWishlist()
      // console.log("line 24",this.productList.products)
    }
    onScroll(){
      console.log('scrolled!!');
      this.page=this.page+1;
      // this.loadProducts();
    }
  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      // products.forEach(element=>{
      //   this.productList.push(element)
        // this.productList.push(products)
      // })
      this.productList=products;
      // console.log("29",this.productList)

      this.loadWishlist()
    })

  }
  loadWishlist() {
   this.wishlistService.getwishlistitems().subscribe((productIds)=>{
    // console.log(productIds)
    this.wishlist=productIds})
  }
  onScrollUp(){
    console.log('scrolled up !!');
  }

}
