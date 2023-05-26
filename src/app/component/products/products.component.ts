import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/poduct';
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
  // products: IProduct[]=[];
  filteredProducts: Product[] = [];
  public filteredString:any;
  //http: any;
  query: string = '';
  items: Product[] = [];
  
  constructor(private _productsService: ProductsService){}

  ngOnInit(){ 
    this._productsService.getProducts().subscribe((products)=>{
      this.products=products;
    });
  this.query= '';
}

    // search(){
    //   this.products = this.products.filter((product)=>{
    //     return product.name.toLowerCase().includes(this.query.toLocaleLowerCase());
    //   });
    // }

    search(){
      if(!this.query){
        this.products = [];
        return;
      }

      const filteredProducts = this.products.filter((product:IProduct)=>{
        return product.name.toLowerCase().includes(this.query.toLowerCase());
      });
      this.products=filteredProducts;
    }

  }


    // this._productsService.getProducts()
    //   .subscribe(
    //     (data) => 
    //     {
    //       this.products = data
    //     }
    // );

   

      // this.http.get('/assets/data/products.json')
      // .map((res: Response) => res.json())
      // .subscribe((data: any) => {
      //   this.items = data;
      // });


  
  // filterProducts(type: string) {
  //   this.filteredProducts = this.products.filter(product => product.type === type);
  // }

 

  // search() {
  //   if (!this.query) {
  //     this.items = [];
  //     return;
  //   }

  //   const filteredItems = this.items.filter((item: Product) => {
  //     return item.name.toLowerCase().includes(this.query.toLowerCase());
  //   });

  //   this.items = filteredItems;
  // }}
