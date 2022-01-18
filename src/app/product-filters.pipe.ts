import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './components/shoppingcart/models/product';
import { pipe } from 'rxjs';

@Pipe({
  name: 'productFilters'
})
export class ProductFiltersPipe implements PipeTransform {
  transform(productList:Product[], searchTerm: string):Product[] {
    if(!productList||!searchTerm){
      return productList
    }
    return productList.filter(productList=>productList.name?.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
  }
}


