import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  model:any={}
productId:any;
productdetail:any
  constructor( private activatedRoute:ActivatedRoute,
    private productservice:ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data['id'];
      this.productservice.productdetail(this.productId).subscribe((data)=>{
        this.productdetail=data;
        console.log(this.productdetail)
      })
 
    })
  }
  Updatenewproduct(){
    console.log(this.model)
    let updatedproduct={
      // id:'',
      // categoryId:this.model.categoryId,
      // name:this.model.name,
      // description:this.model.description,
      // imageurl:this.model.imageurl,
      // price:this.model.price

      title:this.model.name,
      description:this.model.description,
      image:this.model.imageurl,
      categories:"men",
      size:this.model.size,
      price:this.model.price,



    };
    console.log(updatedproduct);
    window.alert('Your product has been added ');
    this.productservice.updateproduct(this.productId,updatedproduct).subscribe(data=>{
      console.log(data)
    })

  }
}
