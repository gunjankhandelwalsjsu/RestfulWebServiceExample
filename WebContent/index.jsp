<html data-ng-app="app">
  <head>
    <title>Show doctors</title>
        <link href="include/newStyles.css" rel="stylesheet">
    
    
    <!-- Use Bootstrap -->
     <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-animate.js"></script>
    
    
    <script type="text/javascript" src="include/app.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
<body data-ng-controller="MainCtrl">
    
     
   <div id="main">
	<div class="page {{ pageClass }}" data-ng-view></div>
   </div>
 </body>

</html>