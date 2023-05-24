import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BookComponent } from './component/book/book.component';
import { Modal2Component } from './component/modal2/modal2.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'cart', component: CartComponent },
  { path: 'book', component: BookComponent},
  { path: 'modal2', component:Modal2Component},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent, HeaderComponent, 
                                  NavbarComponent, ProductsComponent, 
                                  HomeComponent, PageNotFoundComponent,
                                  BookComponent, Modal2Component
                                  ]
