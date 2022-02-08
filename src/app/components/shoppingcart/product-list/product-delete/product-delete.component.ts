import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {
  productId:any;

  constructor(private activatedRoute:ActivatedRoute
    ,private productservice:ProductService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data['id'];
                              console.log("22", this.productId)

    })
    this.productservice.deleteproduct(this.productId).subscribe(viewData=>{
      this.productId=viewData;
                              // console.log("27",viewData)
                             console.log("29", this.productId.Searchedproduct)
                            // console.log("29", this.productItem)
    })
  }
  }


