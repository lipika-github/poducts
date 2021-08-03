import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    console.log("get product list")
    this.products = this.productService.getProductList();
  }





  updateProduct(id: string){
    this.router.navigate(['update-product', id]);
  }

}
