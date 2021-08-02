import { Product } from '../product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {

  
  productId: string;
  product: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this.productId = this.route.snapshot.params['productId'];
    
    this.productService.getProduct(this.productId)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['products']);
  }

}
