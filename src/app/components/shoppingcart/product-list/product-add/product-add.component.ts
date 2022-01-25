import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  model:any={}
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
  }
  Addnewproduct(){
    console.log(this.model)
    let newproduct={
      id:'',
      categoryId:this.model.categoryId,
      name:this.model.name,
      description:this.model.description,
      imageurl:this.model.imageurl,
      price:this.model.price

    };
    console.log(newproduct);
    window.alert('Your product has been added to the cart!');
    this.productservice.Addproduct(newproduct).subscribe(data=>{
      console.log(data)
    })

  }

}
