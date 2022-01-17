import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filterForm=new FormGroup({
    from:new FormControl('',[Validators.required]),
     to:new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }
  filters(){
    console.log(this.filterForm.value)
  }
  get from(){
    return this.filterForm.get('from')
  }
}
