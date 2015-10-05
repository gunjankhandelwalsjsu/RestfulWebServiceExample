// IIFE
(function() {
	'use strict';

	angular.module('app').controller('patientLoginController',
			patientLoginControllerFunc);

	patientLoginControllerFunc.$inject = [ '$rootScope' ];

	function patientLoginControllerFunc($rootScope) {
		
		// Uses this inside controllers to get bound to $scope, here use controllerAs with vm.
		var patientLoginVm = this;
		console.log('inside patient');
		patientLoginVm.makeReservation = makeReservation;

		

		function makeReservation(form) {

			console.log("valid:   " + form.$valid);
			
			// Check whether all fields entered by user in the form are valid.
			if (form.$valid) {

				console.log("Gender : "+patientLoginVm.newPerson.gender);
				console.log("Firstname: " + patientLoginVm.newPerson.firstName);
				console.log("Last Name: " +	patientLoginVm.newPerson.lastName);			
				console.log("Email:  "+ patientLoginVm.newPerson.email);
					
				
			}

		};
		
		
	}

})();
