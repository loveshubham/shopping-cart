import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productItem!:Product

  constructor(private router:Router) {

  }

  ngOnInit(): void {
    // const datadetail = this.router.getCurrentNavigation()?.extras?.state?.['productItem'];
    //   console.log( this.router.getCurrentNavigation()); // should log out 'bar'

  }

}
