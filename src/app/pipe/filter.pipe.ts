import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value :any, filterString: string) {
    if(value.length === 0){
      return value;
    }
    const products=[];
    for(const item of value ){
      if(item['name'] === filterString){
        products.push(item);
      }
    }
   
    return products;
  }
}
