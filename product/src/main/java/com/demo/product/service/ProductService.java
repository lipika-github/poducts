package com.demo.product.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.product.exception.ProductException;
import com.demo.product.model.Product;
import com.demo.product.repo.ProductRepository;

@Service
public class ProductService {

	@Autowired
    private ProductRepository productRepository;
     
    public List<Product> listAll() {
        return  (List<Product>) productRepository.findAll();
    }
     
    public Product save(Product product) {
    	Product newProduct= new Product(product.getProductId(),product.getProductCategory(),product.getProductName(),product.getProductDescription(),product.getUnits());
		 return productRepository.save(newProduct);
    }
     
    public List<Product> get(String productCategory) {
        return productRepository.findAllProductByProductCategory(productCategory);
    }
     
    public Product update(String productId,Product product) throws ProductException{
    	System.out.println("in update"+productId);
    	Product productDetails=productRepository.findById(productId).orElseThrow(() ->  new ProductException("Product Not Found"));
		productDetails.setProductCategory(product.getProductCategory());
		productDetails.setProductName(product.getProductName());
		productDetails.setProductDescription(product.getProductDescription());
		productDetails.setUnits(product.getUnits());
		final Product updatedPoduct=productRepository.save(productDetails);
        return updatedPoduct;
    }

}
