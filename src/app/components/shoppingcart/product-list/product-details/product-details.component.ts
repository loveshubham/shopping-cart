import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MessengerService} from 'src/app/components/shoppingcart/services/messenger.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // @Input() productItem!: Product;
  productdetail!:Product
  productId:number=0;
  productData:any;

  constructor( private activatedRoute:ActivatedRoute ,
    private productservice:ProductService,
    private cartservice:CartService,
    private msg:MessengerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data['id'];
      // console.log("22", this.productId)

    })
    this.productservice.productdetail(this.productId).subscribe(viewData=>{
      this.productData=viewData;
      // console.log("27",viewData)
      // console.log("29", this.productData)
      // console.log("29", this.productItem)
    })
  }
  handleAddToCart(){
    this.cartservice.addProductsToCart(this.productData).subscribe(()=>{
      this.msg.sendMsg(this.productData)
    })

  // this.productdetail=this.productItem
  // console.log("15 line",this.productItem)
}
}
