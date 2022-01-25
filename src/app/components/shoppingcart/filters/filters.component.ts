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
  categoryList: any;
  filterForm=new FormGroup({
    from:new FormControl('',[Validators.required]),
     to:new FormControl(''),
  })

  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.productservice.getcategory().subscribe(data=>{
      this.categoryList=data;
      console.log(this.categoryList)
    })
  }
  filters(){
    console.log(this.filterForm.value)
  }
  get from(){
    return this.filterForm.get('from')
  }
}
