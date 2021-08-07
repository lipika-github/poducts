import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';

import {HomeComponentComponent} from "./home-component/home-component.component";
import {LoginComponent} from "./login/login.component";
const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product/:productId', component: UpdateProductComponent },
  { path: 'search', component: GetProductComponent },
  { path: 'search/:productId/:productCategory', component: GetProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
