import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MessengerService} from 'src/app/components/shoppingcart/services/messenger.service';
import { Categories } from '../../filters/categories';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // @Input() productItem!: Product;
  productdetail!:Product;
  productId?:string;
  productData:any;

  constructor( private activatedRoute:ActivatedRoute ,
    private productservice:ProductService,
    private cartservice:CartService,
    private msg:MessengerService,
    private router:Router) { }

  ngOnInit(): void {



                                    // this is product details with cagtegory slug
                                   // get the Detail from the url
    // const categoryName = this.activatedRoute.snapshot.paramMap.get('category');
    // const titleName = this.activatedRoute.snapshot.paramMap.get('title');

                                  // TODO: implement categoryService
    //  this.productservice.productdetail(this.categoryName).subscribe(category => {
    //   if (!this.titles) {
    // this.router.navigateByUrl(`/category/${category.name}/${category.title}`);
    //   return;
    //   }

                                  // TODO: render the category
    // });




                               // Product detail with id working perfactly
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data['id'];
                              console.log("22", this.productId)

    })
    this.productservice.productdetail(this.productId).subscribe(viewData=>{
      this.productData=viewData;
                              // console.log("27",viewData)
                             console.log("29", this.productData.Searchedproduct)
                            // console.log("29", this.productItem)
    })
  }
  handleAddToCart(){
    this.cartservice.addProductsToCart(this.productData.Searchedproduct._id).subscribe(()=>{
      this.msg.sendMsg(this.productData.Searchedproduct._id)
    })

  }
}

// this.productdetail=this.productItem
// console.log("15 line",this.productItem)
