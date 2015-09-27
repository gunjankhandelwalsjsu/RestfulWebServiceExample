var app2 = angular.module("app2", []);

app2.controller("DoctorAccountController", function($scope, $http) {
  var app2 = this;
  $scope.navTitle = 'All Patients';
  $scope.operation="";
  $scope.isSaveDisabled = true;
  $scope.isDeleteDisabled = true;
   
  var response = $http.get('/RestfulWebServiceExample/rest/doctors/patients/'+ 123);
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
		    })
			
			response.error(function(data, status, headers, config) {
				alert("AJAX failed to get data, status=" + status);
			})
		};
		
		$scope.searchPatient = function(name) {
			var app2 = this;
			
			$http.get('/RestfulWebServiceExample/rest/doctors/search/patient/' + 123+"/"+name);
			response.success(function(data) {
				  $scope.patients = data;
				  $scope.$apply();

			       $scope.navTitle = 'Search Criteria';

				$scope.$apply(function () {
					$scope.patient = data;
		        })

					

				

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
			$scope.patient = {
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
		
/*		$scope.deletePatient = function(id) {
			var response = $http.delete('/RestfulWebServiceExample/rest/doctors/' + id);
			response.success(function(data, status, headers, config) {
				$scope.resetSearch();
			});
				
			response.error(function(data, status, headers, config) {
				alert("AJAX failed to get data, status=" + status);
			})
		};*/
		
		/*
		$scope.deleteDoctor = function(id) {
			var response = $http.delete('/RestfulWebServiceExample/rest/doctors/' + id);
			response.success(function(data, status, headers, config) {
				$scope.resetSearch();
			});
				
			response.error(function(data, status, headers, config) {
				alert("AJAX failed to get data, status=" + status);
			})
		};*/
		
		$scope.resetSearch = function(name) {
			var app2 = this;
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
  });

/*
app2.controller("DoctorAccountController", function($scope, $http) {
  var app2 = this;
  $scope.navigationTitle ='Patients';
  $scope.operation="";
  $scope.isSaveDisabled = true;
  $scope.isDeleteDisabled = true;
  
  
  var response = $http.get('/RestfulWebServiceExample/rest/doctors/patients/'+ 123 );
  response.success(function(data) {
    $scope.patients = data;
    console.log("[main] # of items: " + data.length)
    angular.forEach(data, function(element) {
     console.log("[main] doctor: " + element.pid);
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
				var app1 = this;
				$scope.navTitle = 'Search Criteria';
				
				var response = $http.get('/RestfulWebServiceExample/rest/doctors/search/patient/' + 123+"/"+name);
				response.success(function(data) {
					$scope.patient = data;
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
		
	
		$scope.resetSearch = function(name) {
			var app2 = this;
			$scope.operation="";
			$scope.clearForm();
			$scope.isSaveDisabled = true;
			$scope.isDeleteDisabled = true;
			$scope.navigationTitle = 'All Patients';
			$scope.searchName = '';
			
			var response = $http.get('/RestfulWebServiceExample/rest/doctors/');
			response.success(function(data) {
				$scope.patients = data;
				$scope.$apply();
				console.log("[resetSearch] # of items: " + data.length);
		    });
			
			response.error(function(data, status, headers, config) {
				alert("AJAX failed to get data, status=" + status);
		})
  };
  });*/
