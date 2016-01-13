angular.module('contactApp',[
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
                    		  templateUrl: '/partials/contacts.html',
                    		  onEnter: function(){
                    			  console.log("enter contacts");
                    		  }
                    	  })
                    	  .state('contacts.list',{
                    		  url:'/list',
                    		  templateUrl:'/partials/contacts.list.html',
                       		  controller: 'SimpleCtrl',
                    		  resolve:{
                    			  contacts: function(ContactService){
                    				  return ContactService.getContactList();
                    			  }
                    		  },
                    		  onEnter: function(){
                    			  console.log("enter contacts.list");
                    		  }

                    	  //controller: 'ContactListCtrl'

                    	  })
                    	  .state('contacts.detail',{
                    		  url:'/contacts/:id',
                    		  templateUrl: '/partials/contacts.detail.html',
                    		  //controller: 'ContactInfoCtrl'
                    		  controller: 'DetailCtrl',
                    		  resolve:{
                    			  person: function(ContactService,$stateParams){
                    				  return ContactService.getContactDetails($stateParams.id);
                    			  }
                    		  },
                    		  onEnter: function(){
                    			  console.log("enter contacts.detail");
                    		  }
                    	  });
                      }
                      ]);
