import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../shoppingcart/models/cart-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  cartIT=CartItem;

  constructor() { }

  ngOnInit(): void {
  }

}
