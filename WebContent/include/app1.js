  var app1 = angular.module("app1", []);
  
  app1.controller("HttpCtrl", function($scope, $http) {
    var app1 = this;
    $scope.navTitle = 'All Doctors';
    $scope.operation="";
    $scope.isSaveDisabled = true;
    $scope.isDeleteDisabled = true;
     
    var response = $http.get('/RestfulWebServiceExample/rest/doctors/');
    response.success(function(data) {
      $scope.doctors = data;
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
			var app1 = this;
			$scope.navTitle = 'Search Criteria';
			
			var response = $http.get('/RestfulWebServiceExample/rest/doctors/search/' + name);
			response.success(function(data) {
				$scope.doctor = data;
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
		
		$scope.addNew = function() {
			$scope.isSaveDisabled = false;
			$scope.operation="create";
			$scope.clearForm();
			main.id.focus();
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
			var app1 = this;
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
