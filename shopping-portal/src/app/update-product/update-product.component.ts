import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: string;
  product: Product;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this.productId = this.route.snapshot.params['productId'];

    this.productService.getProduct(this.productId,"default")
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.productService.updateProduct(this.productId, this.product)
      .subscribe(data => console.log(data), error => console.log(error));
   // this.product = new Product();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateProduct();
  }


  gotoList() {
    this.router.navigate(['/products']);
  }

}
