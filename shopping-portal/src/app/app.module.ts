import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateProductComponent,
    ProductListComponent,
    AddProductComponent,
    GetProductComponent,
    HomeComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
