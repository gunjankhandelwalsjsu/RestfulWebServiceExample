// IIFE
(function() {
	'use strict';

	angular.module('app').controller('doctorLoginController',
			doctorLoginControllerFunc);

	doctorLoginControllerFunc.$inject = [ '$http'];

	// handles the control for doctorLogin page.
	function doctorLoginControllerFunc($http) {

		// Uses this inside controllers to get bound to $scope, here use
		// controllerAs with vm.
		var doctorLoginVm = this;
		console.log('inside doctorLogin');
		doctorLoginVm.makeReservation = makeReservation;
		
		
		function makeReservation(form) {

			// Check whether all fields entered by user in the form are valid.
			if (form.$valid) {

				console.log("Speciality : "+doctorLoginVm.newPerson.speciality);
				console.log("Firstname: " + doctorLoginVm.newPerson.firstName);
				console.log("Last Name: " +	doctorLoginVm.newPerson.lastName);			
				console.log("Email:  "+ doctorLoginVm.newPerson.email);
				
			}

		};

		
		
	}

})();
