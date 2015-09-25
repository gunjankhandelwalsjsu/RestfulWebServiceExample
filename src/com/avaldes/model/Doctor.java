package com.avaldes.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

@XmlRootElement(name = "doctor")
public class Doctor {
    private int id;
    private String name;
    private String email;
    private String image; 
	private String specialization;  
	private String[] reviews;
	private String[] listOfPatients;
    private boolean active;
    public String getSpecialization() {
  		return specialization;
  	}

  	public void setSpecialization(String specialization) {
  		this.specialization = specialization;
  	}
  	 public String[] getReviews() {
 		return reviews;
 	}

 	public void setReviews(String[] reviews) {
 		this.reviews = reviews;
 	}


    public Doctor(int id, String name,
                 String email, String specialization,String image, boolean active) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.image = image;
        this.specialization = specialization;

        this.active = active;
    }

    @XmlElement
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @XmlElement
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

   

    @XmlElement
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @XmlElement
    public boolean getActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    @XmlElement
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Doctor() {
    }
    public String[] getListOfPatients() {
		return listOfPatients;
	}

	public void setListOfPatients(String[] listOfPatients) {
		this.listOfPatients = listOfPatients;
	}
    @Override
    public String toString() {
        return "Actor [id=" + id + ", name=" + name + ", email=" + email+ ", specialization=" + specialization
                + ", image=" + image + ", active=" + active + "]";
    }

	public DBObject bsonFromPojo() {
		// TODO Auto-generated method stub

			    BasicDBObject document = new BasicDBObject();
			 
			    document.put( "id",    this.id );
			    document.put( "name",   this.name );		
			    document.put( "email", this.email );			 
			    document.put( "specialization", this.specialization );			 
			    document.put( "imageUrl",   this.image );
			    document.put( "isActive",  this.active );
			    return document;
			    }	
	

	
}