import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilters'
})
export class PriceFiltersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
