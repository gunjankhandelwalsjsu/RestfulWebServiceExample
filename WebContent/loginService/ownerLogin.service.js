/*
 *	SERVICE: Owner Login services
 *	TASK: 
 *		performLogin 
 * 			-- Check if user is authorized. 
 *			-- returns promise (success or reject)
 * 
 */

	angular.module('app').service('ownerLoginService',
			function($http, $q) {

				// Returns an object which contains various tasks/functions related to
				// 'OwnerLogin' services.
				var ownerService = ({

					doOwnerLogin : doOwnerLogin,
					clearOwnerLogin : clearOwnerLogin

				});
				return ownerService;

				
				
				function doOwnerLogin(ownerLoginVm) {

					var deferred = $q.defer(); // Create a new instance of
												// 'deferred'.

					// A async http post request to send the data from database.
					$http({
						method : 'POST',
						url : 'http://localhost:8080/reservation/webapi/login',
						contentType : "application/json",
						data : JSON.stringify(ownerLoginVm.owner),
					}).success(function(data, status, headers, config) {

						deferred.resolve(data);

					}).error(function(data, status, headers, config) {

						// Problem in retrieving data, send error message.
						deferred.reject("An unknown error occurred.");

					});

					// Return 'promise' from 'getMenus' instead of call back
					// functions.
					return deferred.promise;

				};

				
				
				// Clears the model so that the view is reset
				function clearOwnerLogin(ownerLoginVm) {

					// reset the data in 'userMessage' object
					ownerLoginVm.owner = null;
				};

				
				
			});

