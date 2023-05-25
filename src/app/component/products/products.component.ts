import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';


interface Product {
  name: string;
  type: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any[] =[];
  filteredProducts: Product[] = [];
  public filteredString:any;
  
  constructor(private _productsService: ProductsService){}

  ngOnInit(){ 
    this._productsService.getProducts()
      .subscribe(
        (data) => 
        {
          this.products = data
        }
    );

  }
  filterProducts(type: string) {
    this.filteredProducts = this.products.filter(product => product.type === type);
  }
}
