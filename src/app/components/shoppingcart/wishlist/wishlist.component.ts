import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
wishitems:any=[];
  constructor( private WishlistService:WishlistService) { }

  ngOnInit() {
    this.loadingwishItems()
  }

  loadingwishItems(){

    this.WishlistService.getwishlistitems().subscribe((productIds:any)=>{

    this.wishitems=productIds;
    console.log('wish23',this.wishitems)

    });
  }

}
