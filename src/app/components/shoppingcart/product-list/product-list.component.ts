import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { WishlistService } from '../services/wishlist.service';


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

  constructor(private productService:ProductService ,
    private wishlistService:WishlistService

    ){ }

  ngOnInit(): void {
    this.loadProducts()
    this.loadWishlist()
    // console.log("line 24",this.productList.products)
  }
  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{this.productList=products;
      console.log("29",this.productList)
      this.loadWishlist()
    })

  }
  loadWishlist() {
   this.wishlistService.getwishlistitems().subscribe((productIds)=>{
    // console.log(productIds)
    this.wishlist=productIds})
  }

}
