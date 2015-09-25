package com.avaldes;

import javax.ws.rs.*;

import javax.ws.rs.core.MediaType;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;


import com.avaldes.model.Doctor;
import com.avaldes.model.MongoDbDatabase;
import com.avaldes.model.Patient;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

@Path("/doctors")

public class RestfulWSExample {

        private static final String api_version = "1.01A rev.18729";
    //    static Logger logger = Logger.getLogger(JsonService.class);
        static String xmlString = null;
        
        
        String doctorDb ="mongodb://gunjan:khandelwal@ds027908.mongolab.com:27908/user";
        MongoClientURI uri_doctor = new MongoClientURI(doctorDb);
        MongoClient mongoClient_doctor = new MongoClient(uri_doctor);

        static {

            System.out.println("Initializing Internal DataStore...");
        }

        @Path("/version")
        @GET
        @Produces(MediaType.TEXT_HTML)
        public String returnVersion() {
            return "<p>Version: " + api_version + "</p>";
        }

        // This is the default @PATH
        @GET
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public ArrayList<Doctor> getAllDoctors() {
            System.out.println("Getting all doctors...");
            MongoDbDatabase dbase=new MongoDbDatabase();
            ArrayList<Doctor> doctorList= dbase.getAllDoctors(mongoClient_doctor);
            return doctorList;
        }

        @Path("{id}")
        @GET
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public Doctor getDoctorById(@PathParam("id") int id) {
            System.out.println("Getting doctor by ID: " + id);
            MongoDbDatabase dbase=new MongoDbDatabase();
            Doctor doctor = dbase.getDoctorData(id,mongoClient_doctor);
            if (doctor != null) {
   //             logger.info("Inside getDoctorById, returned: " + doctor.toString());
            } else {
    //            logger.info("Inside getDoctorById, ID: " + id + ", NOT FOUND!");
            }
            return doctor;
        }

        @Path("{id}")
        @PUT
        @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public Doctor updateDoctor(Doctor doctor) {
        	   System.out.println("Adding doctor with ID: " + doctor.getId());
               MongoDbDatabase dbase=new MongoDbDatabase();
               
            System.out.println("updateDoctor with ID: " + doctor.getId());
            if (doctor != null) {
            	System.out.println("Inside addDoctor, returned: " + doctor.toString());
                dbase.updateDoctor(doctor,mongoClient_doctor);
       //         logger.info("Inside updateDoctor, returned: " + doctor.toString());
            } else {
        //        logger.info("Inside updateDoctor, ID: " + doctor.getId() + ", NOT FOUND!");
            }
            return doctor;
        }

        @Path("/search/{query}")
        @GET
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public ArrayList<Doctor> searchDoctorByName(@PathParam("query") String query) {
            System.out.println("Searching doctor by Name: " + query);
            MongoDbDatabase dbase=new MongoDbDatabase();
            ArrayList<Doctor> doctorList= dbase.getAllDoctors(mongoClient_doctor);

            ArrayList<Doctor> docList = new ArrayList<Doctor>();
            for (Doctor c: doctorList) {
                if (c.getName().toUpperCase().contains(query.toUpperCase())){
                    docList.add(c);
                System.out.println(c);
                }
            }
            return docList;
        }
        @Path("/add")
        @POST
        @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public Doctor addDoctor(Doctor doctor) {
            System.out.println("Adding doctor with ID: " + doctor.getId());
            MongoDbDatabase dbase=new MongoDbDatabase();
            if (doctor != null) {
                System.out.println("Inside addDoctor, returned: " + doctor.toString());
           dbase.addDoctor(doctor,mongoClient_doctor);

            
            } else {
                System.out.println("Inside addDotor, Unable to add doctors...");
            }
            return doctor;
        }
        
 /********************PATIENT**********************/       
        @Path("/search/patient/{id}/{query}")
        @GET
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public ArrayList<Patient> searchPatientByName(@PathParam("id") int id,@PathParam("query") String query) {
            System.out.println("Searching patient by Name: " + query+ id);
            MongoDbDatabase dbase=new MongoDbDatabase();
            ArrayList<Patient> patientList= dbase.searchPatient(id,mongoClient_doctor,query);

            ArrayList<Patient> patList = new ArrayList<Patient>();
            for (Patient c: patientList) {
                if (c.getName().toUpperCase().contains(query.toUpperCase())){
                	patList.add(c);
                System.out.println(c);
                }
            }
            return patList;
        }
        
        @Path("patient/{id}")
        @PUT
        @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public Patient updatePatient(Patient patient) {
        	   System.out.println("Adding patient with ID: " + patient.getPid());
               MongoDbDatabase dbase=new MongoDbDatabase();
               
            System.out.println("updatePatient with ID: " + patient.getPid());
            if (patient != null) {
            	System.out.println("Inside patientUpdate, returned: " + patient.toString());
                dbase.updatePatient(patient,mongoClient_doctor);
       //         logger.info("Inside updateDoctor, returned: " + doctor.toString());
            } else {
        //        logger.info("Inside updateDoctor, ID: " + doctor.getId() + ", NOT FOUND!");
            }
            return patient;
        }

        
       
        
        @Path("patients/{id}")
        @GET
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public ArrayList<Patient> getPatientsForDoctor(@PathParam("id") int id) {
            System.out.println("Getting Patients by ID: " + id);
            MongoDbDatabase dbase=new MongoDbDatabase();
            ArrayList<Patient> doctor = dbase.getPatientData(id,mongoClient_doctor);
            if (doctor != null) {
   //             logger.info("Inside getDoctorById, returned: " + doctor.toString());
            } else {
    //            logger.info("Inside getDoctorById, ID: " + id + ", NOT FOUND!");
            }
            return doctor;
        }
        
        @Path("patients/{id}/{pid}")
        @GET
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public Patient getPatientById(@PathParam("pid") String pid, @PathParam("id") int id) {
            System.out.println("Getting doctor******** by ID: " + id);
            MongoDbDatabase dbase=new MongoDbDatabase();
            System.out.println("pid"+pid);
            Patient patient = dbase.getDoctorsPatientData(id,pid,mongoClient_doctor);
            System.out.println("Getting doctor******** by patient: " + patient);

         //   System.out.println(patient.getName());
            if (patient != null) {
   //             logger.info("Inside getDoctorById, returned: " + doctor.toString());
            } else {
    //            logger.info("Inside getDoctorById, ID: " + id + ", NOT FOUND!");
            }
            return patient;
        }
        
        
/*
        @Path("{id}")
        @DELETE
        @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
        public Doctor deleteDoctorById(@PathParam("id") String id) {
            System.out.println("Deleting doctor with ID: " + id);

            Doctor doctor = doctors.remove(id);
            if (doctor != null) {
          //      logger.info("Inside deleteDoctorById, returned: " + doctor.toString());
            } else {
        //        logger.info("Inside deleteDoctorById, ID: " + id + ", NOT FOUND!");
            }
            return doctor;
        }*/
    }
