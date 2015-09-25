package com.avaldes.model;

import java.util.ArrayList;

import com.google.gson.Gson;
import com.mongodb.*;
import com.mongodb.client.FindIterable;

/**
 * Created by rajeshkhandelwal on 9/13/15.
 */
public class MongoDbDatabase {

	
	
	
	public Doctor findDoctor(String query, MongoClient mongoClient) {
		// TODO Auto-generated method stub
        DB db = mongoClient.getDB( "user" );

        DBCollection coll = db.getCollection("Doctors");
        DBCursor cursor = coll.find();
            while(cursor.hasNext()) {
                Doctor doc = new Doctor();

                DBObject tobj = cursor.next();
                BasicDBList docList = (BasicDBList) tobj.get("doctors");
                for (int i = 0; i < docList.size(); i++) {
                	   BasicDBObject docObj = (BasicDBObject) docList.get(i);
                       String name1  = docObj.getString("name");
                       if(query==name1){
                    	   int id  = docObj.getInt("id");
                           String email = docObj.getString("email");
                           String specialization = docObj.getString("specialization");
                           String image = docObj.getString("imageUrl");
                           Boolean active = docObj.getBoolean("isActive");
                           doc.setName(name1);
                           doc.setId(id);
                           doc.setEmail(email);
                           doc.setSpecialization(specialization);
                           doc.setActive(active);
                           doc.setImage(image);
                           return doc;
                       }          
                }
            }
			return null;
	}

	
	 public ArrayList<Doctor> getAllDoctors(MongoClient mongoClient) {
		   ArrayList<Doctor> dc = new ArrayList<Doctor>();
	        DB db = mongoClient.getDB( "user" );

	        DBCursor cursor = db.getCollection("Doctors").find();

	        try {
	            while(cursor.hasNext()) {
	                DBObject tobj = cursor.next();
	                BasicDBList docList = (BasicDBList) tobj.get("doctors");
	                System.out.println(docList.size());
	                for (int i = 0; i < docList.size(); i++) {
	                    System.out.println(docList.size());

	                    BasicDBObject docObj = (BasicDBObject) docList.get(i);
	                    int id = docObj.getInt("id");
	                    String name = docObj.getString("name");
	                    String email = docObj.getString("email");
	                    String specialization = docObj.getString("specialization");
	                    String image = docObj.getString("imageUrl");
	                    Boolean active = docObj.getBoolean("isActive");
	                    System.out.println(docList.size());

	                    Doctor doc = new Doctor();
	                    doc.setName(name);
	                    doc.setId(id);
	                    doc.setEmail(email);
	                    doc.setSpecialization(specialization);
	                    doc.setActive(active);
	                    doc.setImage(image);
	                    dc.add(doc);
	                }               
	            	
	                
	            //	System.out.println(tobj);
	              

	            }
	        } finally {
	            cursor.close();
	        }
	        return dc;
	    }
	 
	 public void addDoctor(Doctor doctor,MongoClient mongoClient) {
		  DB db = mongoClient.getDB( "user" );
         DBCollection coll = db.getCollection("Doctors");
         DBObject queryForElem = new BasicDBObject("doctors", new BasicDBObject("$elemMatch", new BasicDBObject("id", doctor.getId())));
         DBObject find = new BasicDBObject("i", 1);

         BasicDBObject updateFields = new BasicDBObject();
         updateFields.put("name", doctor.getName());
         updateFields.put("email", doctor.getEmail());
         updateFields.put("id", doctor.getId());
         updateFields.put("image", doctor.getImage());
         updateFields.put("specialization", doctor.getSpecialization());
         updateFields.put("isActive", doctor.getActive());
         DBObject listItem = new BasicDBObject("doctors", updateFields);

         DBObject updateQuery = new BasicDBObject();
         updateQuery.put("$push", listItem);
         coll.update(find, updateQuery);   
	 }
	 
	 public void updateDoctor(Doctor doctor,MongoClient mongoClient) {
		DB db = mongoClient.getDB( "user" );
        DBCollection coll = db.getCollection("Doctors");
        DBObject queryForElem = new BasicDBObject("doctors", new BasicDBObject("$elemMatch", new BasicDBObject("id", doctor.getId())));
        DBObject find = new BasicDBObject("i", 1);

        BasicDBObject updateFields = new BasicDBObject();
        updateFields.put("name", doctor.getName());
        updateFields.put("email", doctor.getEmail());
        updateFields.put("id", doctor.getId());
        updateFields.put("image", doctor.getImage());
        updateFields.put("specialization", doctor.getSpecialization());
        updateFields.put("isActive", doctor.getActive());
        DBObject listItem = new BasicDBObject("doctors", updateFields);

        DBObject updateQuery = new BasicDBObject();
        updateQuery.put("$set", listItem);
        coll.update(find, updateQuery);   
	 }
	 
	 
    public Doctor getDoctorData(int id, MongoClient mongoClient) {
        DB db = mongoClient.getDB( "user" );

     //   BasicDBObject query = new BasicDBObject("doctors.id", id);
        DBCollection coll = db.getCollection("Doctors");
        DBCursor cursor = coll.find();

        try {
            while(cursor.hasNext()) {
                Doctor doc = new Doctor();

                DBObject tobj = cursor.next();
                BasicDBList docList = (BasicDBList) tobj.get("doctors");
                for (int i = 0; i < docList.size(); i++) {
                	   BasicDBObject docObj = (BasicDBObject) docList.get(i);
                       int id1 = docObj.getInt("id");
                       if(id==id1){
                    	   String name = docObj.getString("name");
                           String email = docObj.getString("email");
                           String specialization = docObj.getString("specialization");
                           String image = docObj.getString("imageUrl");
                           Boolean active = docObj.getBoolean("isActive");
                           doc.setName(name);
                           doc.setId(id);
                           doc.setEmail(email);
                           doc.setSpecialization(specialization);
                           doc.setActive(active);
                           doc.setImage(image);
                           return doc;
                       }
                }
            }

            
        } finally {
            cursor.close();
        }
        return null;
    }


/******************Patient******************/
   
    public ArrayList<Patient> getPatientData(int id, MongoClient mongoClient_doctor) {
           DB db = mongoClient_doctor.getDB( "user" );
    	   DBCollection coll = db.getCollection("PatientListwrtDoctor");
           DBCursor cursor = coll.find();
      	   ArrayList<Patient> pc = new ArrayList<Patient>();
      	   
      	 
           while(cursor.hasNext()) {
                  DBObject tobj = cursor.next();
                  BasicDBList PatientList = (BasicDBList) tobj.get("PatientList");
                  for (int i = 0; i < PatientList.size(); i++) {
                  	   BasicDBObject docObj = (BasicDBObject) PatientList.get(i);
                       int id1 = docObj.getInt("id");
                       System.out.println("got id"+id1);
                       if(id==id1){
                           BasicDBList patients = (BasicDBList) docObj.get("patients");
                      	   System.out.println("got iiii"+patients.size());
                           for (int j = 0; j < patients.size(); j++) {
                          	   BasicDBObject patientObj = (BasicDBObject) patients.get(j);
                          	   String pid  = patientObj.getString("pid");
                          	   String email = patientObj.getString("email");
                               String name = patientObj.getString("name");
                               String disease = patientObj.getString("disease");
                	           Patient patient = new Patient(pid, name, email, disease);
                               pc.add(patient);
               	                       }
               	                }
                     	       }
                             }
                                                
    			return pc;
    }
    	
    	
    	


	public ArrayList<Patient> searchPatient(int id,MongoClient mongoClient,String name) {
		// TODO Auto-generated method stub
		 DB db = mongoClient.getDB( "user" );
  	   DBCollection coll = db.getCollection("PatientListwrtDoctor");
		 DBCursor cursor = coll.find();
    	   ArrayList<Patient> pc = new ArrayList<Patient>();

         while(cursor.hasNext()) {
                Doctor doc = new Doctor();
                DBObject tobj = cursor.next();
                BasicDBList docList = (BasicDBList) tobj.get("PatientList");
                for (int i = 0; i < docList.size(); i++) {
                	   BasicDBObject docObj = (BasicDBObject) docList.get(i);
                       int id1 = docObj.getInt("id");
                       if(id==id1){
  	
                           BasicDBList PatientList = (BasicDBList) tobj.get("patients");

                    	   
                           for (int j = 0; j < PatientList.size(); j++) {
                        	   
                        	   
                        	   BasicDBObject patientObj = (BasicDBObject) PatientList.get(j);
                               String nameOfPatient = patientObj.getString("name");
                              if(name==nameOfPatient){
                        	   String pid  = patientObj.getString("pid");
                        	   String email = patientObj.getString("email");
                             String disease = patientObj.getString("disease");
              	           Patient patient = new Patient(pid, name, email, disease);
                             pc.add(patient);
                              }
             	                       }
             	                }
                   	            }
                           }
                                     
                          
  			return pc;
  }





	public void updatePatient(Patient patient, MongoClient mongoClient) {
		DB db = mongoClient.getDB( "user" );
        DBCollection coll = db.getCollection("Patients");
        DBObject queryForElem = new BasicDBObject("patients", new BasicDBObject("$elemMatch", new BasicDBObject("pid", patient.getPid())));
        DBObject find = new BasicDBObject("i", 1);

        BasicDBObject updateFields = new BasicDBObject();
        updateFields.put("name", patient.getName());
        updateFields.put("email", patient.getEmail());
        updateFields.put("id", patient.getPid());
        updateFields.put("disease", patient.getDisease());
     
        DBObject listItem = new BasicDBObject("patients", updateFields);

        DBObject updateQuery = new BasicDBObject();
        updateQuery.put("$set", listItem);
        coll.update(find, updateQuery);   		
	}


	public Patient getDoctorsPatientData(int id, String pid, MongoClient mongoClient_doctor) {
		// TODO Auto-generated method stub
		System.out.println("inside");
 	   ArrayList<Patient> pc = getPatientData(id, mongoClient_doctor);
 	  // System.out.println(pc);
 	//   System.out.println(pid);
 	   for(Patient p:pc){
			   System.out.println("**************"+p);

 		   if(p.getPid().equals(pid)){
 			   System.out.println("**************"+p.getPid());
 			   return p; 
 		   }
 	   }
		return null;
	}

                          
}
	         
	                
	            
	        
	

