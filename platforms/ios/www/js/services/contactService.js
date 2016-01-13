(function(){

var module = angular.module('contact-service',[]);

  module.service('ContactService', [ function () {
	  var getContactListUri = [{ id:0, name: "Alice" }, { id:1, name: "Bob" }, { id:2, name: "Lars" }];
	  return ({
		 getContactList: getContactList,
		 getContactDetails: getContactDetails
	  });
	  
	  function getContactList(){
		  return getContactListUri;
	  }
	  
	  function getContactDetails(contactId){
		  var person = _.findWhere(getContactListUri,{id: contactId});
		  return person;
	  }
  }]);

})();