(function(){

var module = angular.module('contact-service',['ngCordova']);

  module.service('ContactService',[ '$cordovaContacts', function ($cordovaContacts) {
	  var contacts = [];
	  //var getContactListUri = [{ id:0, name: "Alice" }, { id:1, name: "Bob" }, { id:2, name: "Lars" }];
	  return ({
		 getContacts: getContacts,
		 getContactDetails: getContactDetails
	  });
	  
	  function getContacts(){
			return $cordovaContacts.find({filter : '', fields:  [ 'displayName']}).then(onAllContactsLoadedCallback,onError);
	  }
	  
	  function getContactDetails(contactId){
		console.log("Id of contact: "+contactId)
		var contact = _.findWhere(contacts,{id: contactId});
		console.log("contact info "+JSON.stringify(contact));
		  return contact;
	  }
	  function onAllContactsLoadedCallback(data){
		  contacts = data;
		  return contacts;
	  }
	  function onError(err){
		  alert(err);
	  }
  }]);

})();