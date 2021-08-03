package com.demo.product.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Component
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
	@Id
    @GenericGenerator(name = "product_id", strategy = "com.demo.product.util.ProductIdGenerator")
    @GeneratedValue(generator = "product_id")  
    @Column(name="product_id")
	private String productId;	
	private String productCategory; 
	private String productName;
	private String productDescription;
	private int units;
}
