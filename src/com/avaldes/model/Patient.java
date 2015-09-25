package com.avaldes.model;

import javax.xml.bind.annotation.XmlElement;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

public class Patient {

	private String pid;
    private String name;
    private String email;	  
    private String disease;
	    public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	    public Patient(){
	    	
	    }
	   
	    public Patient(String pid, String name,
	                 String email, String disease) {
	        this.pid = pid;
	        this.name = name;
	        this.email = email;
	        this.disease = disease;
	    }

	    
	    @Override
	    public String toString() {
	        return "Patient [pid=" + pid + ", name=" + name + ", email=" + email+ ", disease=" + disease
	                 + "]";
	    }

		public DBObject bsonFromPojo() {
			// TODO Auto-generated method stub

				    BasicDBObject document = new BasicDBObject();
				 
				    document.put( "pid",    this.pid );
				    document.put( "name",   this.name );		
				    document.put( "email", this.email );			 
				    document.put( "disease", this.disease );			 		  
				    return document;
				    }	
		

		

}
