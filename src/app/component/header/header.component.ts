import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public filterType: any;
  public productList: any;
  searchKey:string="";

  constructor(private product: ProductsService, private searchService: SearchService){}

  ngOnInit(): void {
    this.product.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.filterType = res;
      this.productList.forEach((a:any)=>{
        if(a.type ==='men'){
          a.type = 'men'
        }
        console.log(this.productList)
      });

    });
    this.searchService.search.subscribe(val=>{
      this.searchKey = val;
    })
      
  }

  filter(type:string){
    this.filterType = this.productList
    .filter((a:any)=>{
      if(a.type ==type || type==''){
        return a;
      }
    })

  }

}
