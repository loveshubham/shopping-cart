import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productItem!:Product
  producitemsD!: Product;

  constructor() { }

  ngOnInit(): void {
    console.log(this.producitemsD)
  }

}
