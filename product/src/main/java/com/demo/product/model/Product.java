package com.demo.product.model;

import javax.persistence.*;

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
@Table(name="product")
public class Product {
	@Id
    @GenericGenerator(name = "product_id", strategy = "com.demo.product.util.ProductIdGenerator")
    @GeneratedValue(generator = "product_id")
    @Column(name="product_id")
	private String productId;
	@Column(name="product_category")
	private String productCategory;
	@Column(name="product_name")
	private String productName;
	@Column(name="product_description")
	private String productDescription;
	@Column(name="units")
	private int units;
}
