(function(){
	var module = angular.module('contact-controllers', ['ngCordova', 'contact-service']);
	
	module.controller('SimpleCtrl',['$scope', '$cordovaContacts','ContactService',function($scope, $cordovaContacts, ContactService){
		$scope.contacts = [];
		var start = new Date().getTime();
		$scope.getAllContacts = function(){
			ContactService.getContacts().then(function(data){
			$scope.contacts = data;
		});
		var end = new Date().getTime();
		$scope.time = end - start;
		}
	}])
		module.controller('DetailCtrl',['$scope','contact', function($scope, contact){
			console.log('DetailCtrl');
			$scope.contact = contact;
			console.log("ControllerContactInfo: "+JSON.stringify(contact));
	}]);
	


})();