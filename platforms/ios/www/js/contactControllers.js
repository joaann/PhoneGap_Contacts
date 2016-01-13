(function(){
	var module = angular.module('contact-controllers', []);

//	module.controller('ContactSearchCtrl', ['$scope', function($scope){
//			$scope.contacts = [];
//			var options = new ContactFindOptions();
//			//options.filter=""; //returns all results
//			options.filter=$scope.searchTxt;
//			options.multiple=true;
//			var fields = ["displayName", "name", "phoneNumbers", "emails"];
//			navigator.contacts.find(fields,function(contacts) {
//				$scope.contacts=contacts;
//				$scope.$apply();
//			},function(e){console.log("Error finding contacts " + e.code)},options);
//	}])
//
//	module.controller('ContactListCtrl',['$scope', function($scope){
//			$scope.contacts = [];
//			var options = new ContactFindOptions();
//			options.filter=""; //returns all results
//			options.multiple=true;
//			options.hasPhoneNumber=true;
//			var fields = ["id","displayName", "name", "phoneNumbers", "emails"];
//			navigator.contacts.find(fields,function(contacts) {
//				$scope.contacts=contacts;
//				$scope.$apply();
//			},function(e){console.log("Error finding contacts " + e.code)},options);
//	}])
//	
//	module.controller('ContactInfoCtrl', ['$scope','contactId', '$stateParams', function($scope, contactId, $stateParams) {
//			var options = new ContactFindOptions();
//			options.filter=$stateParams.contactId;
//			options.multiple=true;
//			options.hasPhoneNumber=true;
//			var fields = ["id","displayName", "name", "phoneNumbers", "emails"];
//			navigator.contacts.find(fields,function(contacts) {
//				$scope.contacts=contacts;
//				$scope.$apply();
//			},function(e){console.log("Error finding contacts " + e.code)},options);
//	}])
		module.controller('SimpleCtrl',['$scope','contacts', function($scope, contacts){
		console.log('SimpleCtrl');
		$scope.contacts=contacts;
	}])
		module.controller('DetailCtrl',['$scope','person', function($scope, person){
			console.log('DetailCtrl');
			$scope.person = person;
	}]);
	


})();