// IIFE
(function() {
	'use strict';

	angular.module('app').controller('LoginController',
			LoginControllerFunc);

	LoginControllerFunc.$inject = [];

	function LoginControllerFunc() {
		
		// Uses this inside controllers to get bound to $scope, here use controllerAs with vm.
		var loginVm = this;
		console.log('inside login');
	}

})();
