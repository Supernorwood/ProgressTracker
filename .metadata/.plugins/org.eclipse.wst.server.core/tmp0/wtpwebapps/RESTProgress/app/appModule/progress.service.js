angular.module('appModule')
.factory('progressService', function($http) {
  var service = {};
  
  var actions = [];
 
  
//public
  service.index = function() {
	    return $http({
	      method : 'GET',
	      url : 'http://localhost:8080/RESTProgress/rest/actions'
	    })
	  };

	  service.create = function(action) {
		    return $http({
		      method : 'POST',
		      url : 'http://localhost:8080/RESTProgress/rest/actions',
		      headers : {
		        'Content-Type' : 'application/json'
		      },
		      data : action
		    })
		  };
  
		  service.destroy = function(id){
			
			  return $http({
			      method : 'DELETE',
			      url : 'http://localhost:8080/RESTProgress/rest/actions/' + id
			    })
			  
				
		  };
		  
		  
		  service.update = function(actions){

			  return $http({
			      method : 'PUT',
			      url : 'http://localhost:8080/RESTProgress/rest/actions/' + actions.id, 
			      headers : {
			        'Content-Type' : 'application/json'
			      },
			      data : actionss
			    })

			  };
  
			  return service;
})