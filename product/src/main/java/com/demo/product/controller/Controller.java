package com.demo.product.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.product.exception.ProductException;
import com.demo.product.model.Product;
import com.demo.product.repo.ProductRepository;
import com.demo.product.service.ProductService;
@RestController
public class Controller {
	
	@Autowired
	private ProductService service;

	@GetMapping("/")
	public ResponseEntity healthCheck() {
		return  ResponseEntity.ok("All good");
	}
	@GetMapping("/callback")
	public boolean test() {
		return  false;
	}
	@GetMapping("/products")
	public ResponseEntity getAllProducts() {
		//return  ResponseEntity.ok("All good");

		return ResponseEntity.ok(service.listAll());
	}


	@GetMapping("/products/{productId}/{productCategory}")
	public ResponseEntity getProduct(@PathVariable String productId ,@PathVariable String productCategory) {
		if(!productId.equals("default")) {

			return ResponseEntity.ok(service.getById(productId));
		}
		else if(!productCategory.equals("default")){

			return ResponseEntity.ok(service.get(productCategory));
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PostMapping("/products")
	public void addProduct(@RequestBody Product product) {

		service.save(product);
	}
	
	@PutMapping("/products/{productId}")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product,@PathVariable String productId) {
		return ResponseEntity.ok(service.update(productId,product));
	}
	
	

}
