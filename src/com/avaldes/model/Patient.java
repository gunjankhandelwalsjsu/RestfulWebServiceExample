package com.avaldes.model;

import javax.xml.bind.annotation.XmlElement;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

public class Patient {

	private String pid;
    private String name;
    private String email;	  
    private String disease;
    private double height;
    private double weight;
    private String address;	  
    private long phone;
    private String blood_type;
    private String ethnicity; 
    private String languagetype;
    private String Birthday;
    private String primary_doc;
	private EmergencyContact e;
	
	private String gender;
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}


    public String getPrimary_doc() {
		return primary_doc;
	}

	public void setPrimary_doc(String primary_doc) {
		this.primary_doc = primary_doc;
	}

	public String getBlood_type() {
		return blood_type;
	}

	public void setBlood_type(String blood_type) {
		this.blood_type = blood_type;
	}

	public String getEthnicity() {
		return ethnicity;
	}

	public void setEthnicity(String ethnicity) {
		this.ethnicity = ethnicity;
	}

	public String getLanguagetype() {
		return languagetype;
	}

	public void setLanguagetype(String languagetype) {
		this.languagetype = languagetype;
	}

	public String getBirthday() {
		return Birthday;
	}

	public void setBirthday(String birthday) {
		this.Birthday = birthday;
	}

	
    
    public double getHeight() {
		return height;
	}

	public void setHeight(float height) {
		this.height = height;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public EmergencyContact getE() {
		return e;
	}

	public void setE(EmergencyContact e) {
		this.e = e;
	}

    
    
    
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

	   
	   
	    public Patient(String pid, String name , String email , String disease , double height , double weight , String address , long phone , String primary_doc , String blood_type , String gender, String languagetype , String birthday , EmergencyContact e,String ethnicity)
      {
	        this.pid = pid;
	        this.name = name;
	        this.email = email;
	        this.disease = disease;
	        this.height=height;
	        this.address=address;
	        this.Birthday=birthday;
	        this.blood_type=blood_type;
	        this.e=e;
	        this.ethnicity=ethnicity;
	        this.phone=phone;
	        this.primary_doc=primary_doc;
	        this.languagetype=languagetype;
	        this.gender=gender;
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
