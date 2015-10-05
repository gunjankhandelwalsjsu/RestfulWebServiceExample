var app = angular.module('app', ['ngRoute','ngAnimate']);
app.controller("DoctorAccountController", function($scope,$http) 
		{
    var app = this;
    $scope.navTitle = 'All my Patients';
    $scope.operation="";
    $scope.isSaveDisabled = true;
    $scope.isDeleteDisabled = true;
    	
    var response = $http.get('/RestfulWebServiceExample/rest/doctors/patients/'+ 123 );
    response.success(function(data) {
      $scope.patients = data;
      console.log("[main] # of items: " + data.length)
      angular.forEach(data, function(element) {
        console.log("[main] doctor: " + element.name);
      });
    })
    response.error(function(data, status, headers, config) {
      alert("AJAX failed to get data, status=" + status);
    })
     	
  		$scope.getPatient = function(pid) {
    	var response = $http.get('/RestfulWebServiceExample/rest/doctors/patients/'+ 123+'/'+pid );
		
		response.success(function(data) {
			$scope.patient = data;
			$scope.operation="update";
			$scope.isSaveDisabled = false;
			$scope.isDeleteDisabled = false;
  				console.log("[main] # of items: " + data.length)
  			    angular.forEach(data, function(element) {
  			    console.log("[main] doctor: " + element.name);
  			    });

  		    })
  			
  			response.error(function(data, status, headers, config) {
  				alert("AJAX failed to get data, status=" + status);
  			})
  		};
  		
  		$scope.searchPatient = function(name) {
			var app = this;
			var response = $http.get('/RestfulWebServiceExample/rest/doctors/search/patient/' + 123+"/"+name);
			response.success(function(data) {
			    $scope.navTitle = 'Search Criteria';
				$scope.patients = data;

				$scope.$apply(function () {
					$scope.$apply(function () {
						$scope.patient = data;
			        })

						
		        });
				console.log("[searchDoctor] # of items: " + data.length)
				angular.forEach(data, function(element) {
					console.log("[searchDctor] dctor: " + element.name);
				});

		    });
  			
  			response.error(function(data, status, headers, config) {
  				alert("AJAX failed to get data, status=" + status);
  			})
  		};
  		
  		$scope.clearForm = function() {
  			$scope.doctor = {
  					id:'',
  					name:'',
  					disease:'',
  					email:'',
  					
  			};
  		}
  		
  		$scope.addNew = function() {
  			$scope.isSaveDisabled = false;
  			$scope.operation="create";
  			$scope.clearForm();
  			main.id.focus();
  			$scope.isDeleteDisabled = true;
  		}
  		
  		$scope.savePatient = function(id) {
  			$scope.jsonObj = angular.toJson($scope.patient, false);
  			console.log("[update] data: " + $scope.jsonObj);

  			if ($scope.operation == "update") {
  				var response = $http.put('/RestfulWebServiceExample/rest/doctors/patient' + id, $scope.jsonObj);
  				response.success(function(data, status, headers, config) {
  					$scope.resetSearch();
  			    });
  				
  				response.error(function(data, status, headers, config) {
  					alert("AJAX failed to get data, status=" + status);
  				})
  			} else if ($scope.operation == "create") {
  				var response = $http.post('/RestfulWebServiceExample/rest/doctors/add', $scope.jsonObj);
  				response.success(function(data, status, headers, config) {
  					$scope.resetSearch();
  			    });
  				
  				response.error(function(data, status, headers, config) {
  					alert("AJAX failed to get data, status=" + status);
  				})	
  			}
  		};
  		
  		$scope.deleteDoctor = function(id) {
  			var response = $http.delete('/RestfulWebServiceExample/rest/doctors/' + id);
  			response.success(function(data, status, headers, config) {
  				$scope.resetSearch();
  			});
  				
  			response.error(function(data, status, headers, config) {
  				alert("AJAX failed to get data, status=" + status);
  			})
  		};
  		
  		$scope.resetSearch = function(name) {
  			var app = this;
  			$scope.operation="";
  			$scope.clearForm();
  			$scope.isSaveDisabled = true;
  			$scope.isDeleteDisabled = true;
  			$scope.navTitle = 'All Patients';
  			$scope.searchName = '';
  			
  			var response = $http.get('/RestfulWebServiceExample/rest/doctors/');
  			response.success(function(data) {
  				$scope.doctors = data;
  				$scope.$apply();
  				console.log("[resetSearch] # of items: " + data.length);
  		    });
  			
  			response.error(function(data, status, headers, config) {
  				alert("AJAX failed to get data, status=" + status);
  		})
    };
    $scope.pageClass="DoctorAccount"


   });
app.controller('MainCtrl', function($scope) {
	   $scope.message = 'Everyone come and see how good I look!';
	   $scope.pageClass="MainPage"

	   });
app.controller("HttpCtrl", function($scope, $http) {
    var app = this;
    $scope.navTitle = 'All Doctors';
    $scope.operation="";
    $scope.isSaveDisabled = true;
    $scope.isDeleteDisabled = true;
     
    var response = $http.get('/RestfulWebServiceExample/rest/doctors/');
    response.success(function(data) {
      $scope.doctors = data;
      $scope.doctor=doctors[0];
      console.log("[main] # of items: " + data.length)
      angular.forEach(data, function(element) {
        console.log("[main] doctor: " + element.name);
      });
    })
    response.error(function(data, status, headers, config) {
      alert("AJAX failed to get data, status=" + status);
    })
     
		
		$scope.getDoctor = function(id) {
			var response = $http.get('/RestfulWebServiceExample/rest/doctors/'+ id );
			
			response.success(function(data) {
				$scope.doctor = data;
				$scope.operation="update";
				$scope.isSaveDisabled = false;
				$scope.isDeleteDisabled = false;
		    })
			
			response.error(function(data, status, headers, config) {
				alert("AJAX failed to get data, status=" + status);
			})
		};
		
		$scope.searchDoctor = function(name) {
			var app = this;
			$scope.navTitle = 'Search Criteria';
			
			var response = $http.get('/RestfulWebServiceExample/rest/doctors/search/' + name);
			response.success(function(data) {
				$scope.doctors = data;
				$scope.$apply();

				console.log("[searchDoctor] # of items: " + data.length)
				angular.forEach(data, function(element) {
					console.log("[searchDctor] dctor: " + element.name);
				});

		    });
			
			response.error(function(data, status, headers, config) {
				alert("AJAX failed to get data, status=" + status);
			})
		};
		
		$scope.clearForm = function() {
			$scope.doctor = {
					id:'',
					name:'',
					specialization:'',
					email:'',
					image:'',
					active:''
			};
		}
		
		$scope.addNew = function(element) {
			$scope.operation="create";
			$scope.clearForm();
			main.id.focus();
			$scope.isSaveDisabled = false;
			$scope.isDeleteDisabled = true;
		}
		
		$scope.saveDoctor = function(id) {
			$scope.jsonObj = angular.toJson($scope.doctor, false);
			console.log("[update] data: " + $scope.jsonObj);

			if ($scope.operation == "update") {
				var response = $http.put('/RestfulWebServiceExample/rest/doctors/' + id, $scope.jsonObj);
				response.success(function(data, status, headers, config) {
					$scope.resetSearch();
			    });
				
				response.error(function(data, status, headers, config) {
					alert("AJAX failed to get data, status=" + status);
				})
			} else if ($scope.operation == "create") {
				var response = $http.post('/RestfulWebServiceExample/rest/doctors/add', $scope.jsonObj);
				response.success(function(data, status, headers, config) {
					$scope.resetSearch();
			    });
				
				response.error(function(data, status, headers, config) {
					alert("AJAX failed to get data, status=" + status);
				})	
			}
		};
		
		$scope.deleteDoctor = function(id) {
			var response = $http.delete('/RestfulWebServiceExample/rest/doctors/' + id);
			response.success(function(data, status, headers, config) {
				$scope.resetSearch();
			});
				
			response.error(function(data, status, headers, config) {
				alert("AJAX failed to get data, status=" + status);
			})
		};
		
		$scope.resetSearch = function(name) {
			var app = this;
			$scope.operation="";
			$scope.clearForm();
			$scope.isSaveDisabled = true;
			$scope.isDeleteDisabled = true;
			$scope.navTitle = 'All Doctors';
			$scope.searchName = '';
			
			var response = $http.get('/RestfulWebServiceExample/rest/doctors/');
			response.success(function(data) {
				$scope.doctors = data;
				$scope.$apply();
				console.log("[resetSearch] # of items: " + data.length);
		    });
			
			response.error(function(data, status, headers, config) {
				alert("AJAX failed to get data, status=" + status);
		})
    };
    $scope.pageClass="Doctors"

    });



app.controller('thirdController', function($scope) {
	$scope.message = 'Look! I am in third page.';
    $scope.pageClass="thirdPage"

	});

app.config(['$routeProvider',function($routeProvider){
	  $routeProvider.
	  when('/',{
		   templateUrl:'MainPage.html',
		   controller:'MainCtrl'
	  }).
	  when('/DoctorAccount',{
		   templateUrl:'DoctorAccount.html',
		   controller:'DoctorAccountController'

	  }).
	  when('/Doctors',{
		   templateUrl:'Doctors.html',
		   controller:'HttpCtrl'

	  }).
	 
	  when('/thirdPage',{
		   templateUrl:'thirdPage.html',
		   controller:'thirdController'

	  }).
      when('/home', {
        templateUrl: 'view/template/gallery/homeGallery.tmpl.html', 
        controller: 'HomeController',
        controllerAs: 'homeVm'
      })
      .when('/reservation', {
        templateUrl: 'view/template/reservation/reservation.tmpl.html', 
        controller: 'ReservationController',
        controllerAs: 'reservationVm'
      })
      .when('/message', {
        templateUrl: 'view/template/message/message.tmpl.html', 
        controller: 'MessageController',
        controllerAs: 'messageVm'
      })
      .when('/seating', {
        templateUrl: 'view/template/seating/seating.tmpl.html', 
        controller: 'SeatingController',
        controllerAs: 'seatingVm'
      })
      .when('/menu', {
        templateUrl: 'view/template/menu/menu.tmpl.html', 
        controller: 'MenuController',
        controllerAs: 'menuVm'
      })
      .when('/login', {
        templateUrl: 'view/template/login/login.tmpl.html', 
        controller: 'LoginController',
        controllerAs: 'loginVm'
      })
      .when('/doctorLogin', {
        templateUrl: 'view/template/login/doctorLogin.tmpl.html', 
        controller: 'doctorLoginController',
        controllerAs: 'doctorLoginVm'
      })
      .when('/patientLogin', {
        templateUrl: 'view/template/login/patientLogin.tmpl.html', 
        controller: 'patientLoginController',
        controllerAs: 'patientLoginVm'
      })
      .otherwise({
        templateUrl: 'view/template/login/login.tmpl.html', 
        controller: 'LoginController',
        controllerAs: 'loginVm'
      });
          
 
    
	  
	  // create the controller and inject Angular's $scope
}]);
  
