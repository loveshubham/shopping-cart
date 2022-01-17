import { Component, OnInit , Input, Output ,EventEmitter} from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  // [x: string]: any;
@Input() cartItem:any
 @Output() todelete:EventEmitter<Product>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  //  console.log(this.cartItem)
    
  }
  deletetodo(product:Product){
    this.todelete.emit(product);

    
  }
}
