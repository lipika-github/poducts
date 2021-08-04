package com.demo.product.service;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.product.exception.ProductException;
import com.demo.product.model.Product;
import com.demo.product.repo.ProductRepository;

@Service
public class ProductService {
  Logger logger= LoggerFactory.getLogger(ProductService.class);
	@Autowired
    private ProductRepository productRepository;
     
    public List<Product> listAll() {
        return  (List<Product>) productRepository.findAll();
    }
     
    public Product save(Product product) {
    	Product newProduct= new Product(product.getProductId(),product.getProductCategory(),product.getProductName(),product.getProductDescription(),product.getUnits());
        logger.info("going to save the product");
    	return productRepository.save(newProduct);
    }
     
    public List<Product> get(String productCategory) {
        return productRepository.findAllProductByProductCategory(productCategory);
    }
    public Product getById(String productCategory) {
        return productRepository.findById(productCategory).get();
    }
     
    public Product update(String productId,Product product) throws ProductException{
        logger.info("going to update  the product if found");
    	Product productDetails=productRepository.findById(productId).orElseThrow(() ->  new ProductException("Product Not Found"));
		productDetails.setProductCategory(product.getProductCategory());
		productDetails.setProductName(product.getProductName());
		productDetails.setProductDescription(product.getProductDescription());
		productDetails.setUnits(product.getUnits());
		final Product updatedPoduct=productRepository.save(productDetails);
        return updatedPoduct;
    }

}
