import { Product } from '../product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {


  productCategory: string;
  products: Observable<Product[]>;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
  //  this.productCategory = this.route.snapshot.params['productCategory'];
   // this.product = new Product();

    this.productCategory = this.route.snapshot.params['productCategory'];

    // this.productService.getProduct(this.productCategory)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.product = data;
    //   }, error => console.log(error));
  }
   findUserByProductCategory(){
     //this.productCategory = this.route.snapshot.params['productCategory'];
     // this.productService.getProductList();
     //this.products =this.router.navigate(['search',this.productCategory]);
    this.products= this.productService.getProduct(this.productCategory);
    //resp.subscribe((data)=>this.products=data);
  }
  list(){
    this.router.navigate(['products']);
  }

}
