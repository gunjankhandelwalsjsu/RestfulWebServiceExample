/*
 *	SERVICE: Guest Login services
 *	TASK: 
 *		make a guest reservation  
 *			-- returns promise (success or reject)
 * 
 */


angular.module('app').service('guestLoginService', function($http, $q) {

					// Returns an object which contains various tasks/functions
					// related to 'OwnerLogin' services.
					var guestService = ({

						sendGuestReservationInfo : sendGuestReservationInfo,
						clearGuestLogin : clearGuestLogin

					});
					return guestService;

					
					
					function sendGuestReservationInfo(reservationData) {

						console.log(JSON.stringify(reservationData));
						
						var deferred = $q.defer(); // Create a new instance
						// of 'deferred'.

						// A async http post request to send the data from
						// database.
						$http(
								{
									method : 'POST',
									url : 'http://localhost:8080/reservation/webapi/userReservation',
									contentType : "application/json",
									data : JSON.stringify(reservationData),
								})
								.success(
										function(data, status, headers, config) {
											console.dir(data);	
											// The call was successful
											deferred.resolve(data);

										})
								.error(
										function(data, status, headers, config) {

											// Problem in retrieving data,
											// send error message.
											deferred
													.reject("An unknown error occurred.");

										});

						// Return 'promise' from 'getMenus' instead of call
						// back functions.
						return deferred.promise;

					};

					
					
					// Clears the model so that the view is reset
					function clearGuestLogin(guestLoginVm) {

						// reset the data in 'userMessage' object
						guestLoginVm.newPerson = null;

					};
					
					

				});
