angular.module('contactApp',[
					'ngCordova',
                      'ui.router',
                      'contact-controllers',
                      'contact-service'
                      ]).run(['ContactService', function(ContactService){
                    	  
                      }])
                      .config(['$stateProvider', '$urlRouterProvider',
                                 function($stateProvider,$urlRouterProvider){

                    	  $urlRouterProvider
                    	  .when('','/contacts/list')
                    	  .when('/','/contacts/list')
                    	  .otherwise('/contacts/list');

                    	  $stateProvider
                    	  .state('contacts',{
                    		  abstract: true,
                    		  url: '/contacts',
                    		  templateUrl: 'partials/contacts.html',
                    		  onEnter: function(){
                    			  console.log("enter contacts");
                    		  }
                    	  })
                    	  .state('contacts.list',{
                    		  url:'/list',
                    		  templateUrl:'partials/contacts.list.html',
                       		  controller: 'SimpleCtrl', //SimpleCtrl or ContactListCtrl
                    		  // resolve:{
                    			   // contacts: function(ContactService){
                    				   // return ContactService.getContacts();
                    			   // }
                    		   // },
                    		  onEnter: function(){
                    			  console.log("enter contacts.list");
                    		  }


                    	  })
                    	  .state('contacts.detail',{
                    		  url:'/contacts/:id',
                    		  templateUrl: 'partials/contacts.detail.html',
                    		  controller: 'DetailCtrl', //DetailCtrl or ContactInfoCtrl
                    		  resolve:{
                    			  contact: function(ContactService,$stateParams){
                    				  return ContactService.getContactDetails($stateParams.id);
                    			  }
                    		  },
                    		  onEnter: function(){
                    			  console.log("enter contacts.detail");
                    		  }
                    	  });
                      }
                      ]);
