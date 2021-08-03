package com.demo.product.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseStatus;




@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProductException extends RuntimeException {
	
	public ProductException(String message) {
		super(message);
	
	
	}		

}
