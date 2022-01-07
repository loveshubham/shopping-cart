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
  productList:Product[]=[];
  wishlist:any[]=[]

  constructor(private productService:ProductService ,
    private wishlistService:WishlistService
              
    ){ }

  ngOnInit(): void {
    this.loadProducts()
    this.loadWishlist()
  }
  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{this.productList=products;
      this.loadWishlist()
    })

  }
  loadWishlist() {
    // this.wishlistService.getWishlist().subscribe((productIds)=>{this.wishlist=productIds})
  }

}
