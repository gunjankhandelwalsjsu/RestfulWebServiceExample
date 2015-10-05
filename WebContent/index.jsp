<html data-ng-app="app">
  <head>
    <title>Connected Patients Health Analytics Using Wearables</title>
<link rel="stylesheet" href="include/style.css">
<!-- Use normalized CSS -->
<link rel="stylesheet"
	href="https://necolas.github.io/normalize.css/3.0.2/normalize.css">
<link rel="stylesheet" href="include/jqtree.css">
    
    
    <!-- Use Bootstrap -->
     <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-animate.js"></script>
    <script src="https://code.angularjs.org/1.4.1/angular-messages.js"></script>
	<!-- load jquery -->
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="script/jqTree/tree.jquery.js"></script>
    
    
    <script type="text/javascript" src="include/app.js"></script>
    <!-- load scripts for services -->
	<script src="script/service/gallery/imageLoad.factory.js"></script>
	<script src="script/service/menu/loadMenu.service.js"></script>
	<script src="script/service/message/message.service.js"></script>
	<script src="script/service/login/doctorLogin.service.js"></script>
	<script src="script/service/seating/currentSeating.service.js"></script>
	<script src="script/service/login/patientLogin.service.js"></script>
	<script src="script/service/reservation/reservation.service.js"></script>


	<!-- load template related scripts -->
	<script src="script/controller/gallery/homeGallery.controller.js"></script>
	<script src="script/controller/reservation/reservation.controller.js"></script>
	<script src="script/controller/seating/seating.controller.js"></script>
	<script src="script/controller//message/message.controller.js"></script>
	<script src="script/controller/menu/menu.controller.js"></script>
	<script src="script/controller/login/login.controller.js"></script>
	<script src="script/controller/login/patientLogin.controller.js"></script>
	<script src="script/controller/login/doctorLogin.controller.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
<body data-ng-controller="MainCtrl">
    <!-- page header -->
	<header>
		<!-- site heading -->
		<p class="siteName">
			<span id="siteMainName"><strong>Connected Patients Health Analytics Using Wearables</strong></span> <a
				class="webLinksLogin" href="#/login">Login</a>
		</p>
		<!-- page navigation option -->
		<!-- <nav>
			<ul class="navigationList">
				<li><a class="navOption" href="#/home">Home</a></li>
				<li><a class="navOption" href="#/reservation">Reservation</a></li>
				<li><a class="navOption" href="#/seating">Seating</a></li>
				<li><a class="navOption" href="#/menu">Menu</a></li>
				<li><a class="navOption" href="#/message">Message</a></li>
			</ul>
		</nav> --> 
	</header>
	
	<!-- page content -->
	<article>

		<!-- <section id="contentDetails" data-ng-include="mainVm.templateURL"> -->
		<section id="contentDetails" data-ng-view>
			<!-- different section/page details go here -->
		</section>

	</article>

	<!-- page footer -->
	<footer>
		<div class="footerInfo">
			<p>&copy; 2015 Project By Hardik shah, Gunjan Khandelwal, Sai Aishwarya, and Wilbert.
				 Contact us at +1 000 000 0000.</p>
		</div>
	</footer>
     
   
 </body>

</html>