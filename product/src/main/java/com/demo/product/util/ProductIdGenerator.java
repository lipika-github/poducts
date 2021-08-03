package com.demo.product.util;


import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class ProductIdGenerator implements IdentifierGenerator{


	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
		 String prefix = "P";
		    Connection connection = session.connection();

		    try {
		        Statement statement=connection.createStatement();

		        ResultSet rs=statement.executeQuery("select count(product_id) as Id from Product");

		        if(rs.next())
		        {
		        	int count=0;String generatedId="";
		            int id=rs.getInt(1)+1;
		            int num=id;
		            while (num != 0) {
		                
		            	num /= 10;
		                ++count;
		              }
		            if(count==1)
		             generatedId = prefix + Integer.valueOf("0")+Integer.valueOf(id);
		            else {
		            	generatedId=prefix+Integer.valueOf(id);
		            }
		            return generatedId;
		        }
		    } catch (SQLException e) {
		        
		        e.printStackTrace();
		    }

		    return null;
		
	}

}
