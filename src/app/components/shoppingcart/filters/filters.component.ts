import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Categories } from './categories';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  // @Input('price') price;
  categoryList: any;
  price$: any;
  filterForm=new FormGroup({
    from:new FormControl('',[Validators.required]),
     to:new FormControl(''),
  })

  constructor(private productservice:ProductService,
    // priceService: PriceService
    )
    {
      // this.price$ = priceService.getPrice();
    }

  ngOnInit() {
    this.productservice.getcategory().subscribe(data=>{
      this.categoryList=data;
      // console.log(this.categoryList)
    })
  }  
  filters(){
    console.log(this.filterForm.value)
  }
  get from(){
    return this.filterForm.get('from')
  }







}

