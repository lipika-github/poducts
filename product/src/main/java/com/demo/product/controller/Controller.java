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
	
	@GetMapping("/products")
	public ResponseEntity getAllProducts() {
		//return  ResponseEntity.ok("All good");
		return ResponseEntity.ok(service.listAll());
	}
	
	@GetMapping("/products/{productCategory}")
	public ResponseEntity getProduct(@PathVariable String productCategory) {
		System.out.println("in getProduct");
		return ResponseEntity.ok(service.get(productCategory));
	}
	
	@PostMapping("/products")
	public void addProduct(@RequestBody Product product) {
		
		service.save(product);
	}
	
	@PutMapping("/products/{productId}")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product,@PathVariable String productId) throws ProductException{		
		//System.out.println("in update");
		return ResponseEntity.ok(service.update(productId,product));
	}
	
	

}
