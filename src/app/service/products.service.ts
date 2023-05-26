import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../poduct';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url: string = "/assets/data/products.json";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url);
    
  }
}

