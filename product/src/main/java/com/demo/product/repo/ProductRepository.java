package com.demo.product.repo;

import org.springframework.data.repository.CrudRepository;

import com.demo.product.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends PagingAndSortingRepository<Product, String> {

     List<Product> findAllProductByProductCategory(@Param("productCategory") String productCategory);
}
