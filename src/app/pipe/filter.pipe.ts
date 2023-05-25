import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value :any, filteredString: string) {
    if(value.length === 0){
      return value;
    }
    const products=[];
    for(const item of value ){
      if(item['name'] === filteredString){
        console.log('Item Name:', item['name']);
    
        products.push(item);
      }
    }
    console.log('products size:', products.length);
    return products;
  }
    

    
  

}
