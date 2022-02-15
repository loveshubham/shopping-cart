import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './components/shoppingcart/models/product';

@Pipe({
  name: 'sizeFilters'
})
export class SizeFiltersPipe implements PipeTransform {

  transform(productList:Product[], size: string):Product[]{
    if(!productList||!size){
      return productList
    }
    return productList.filter(productList=>productList.size?.toLowerCase().indexOf(size.toLowerCase())!==-1);
  }

}

