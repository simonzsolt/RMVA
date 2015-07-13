angular
	.module('versApp')
			
		.controller('loginCtrl', function($scope, $rootScope, $http, $location) {
	  		// This object will be filled by the form
			  $scope.user = {};
			  $rootScope.loggedInUser = '';

			  // Register the login() function
			  $scope.login = function(){
			    $http.post('/login', {
			      username: $scope.user.username,
			      password: $scope.user.password,
			    })
			    .success(function(user){
			      // No error: authentication OK
			      $rootScope.message = 'Authentication successful!';
			      $location.url('/admin');
			      $rootScope.loggedInUser = $scope.user.username;
			      console.log('loggedInUser: ' + $rootScope.loggedInUser);
			    })
			    .error(function(){
			      // Error: authentication failed
			      $rootScope.message = 'Authentication failed.';
			      $location.url('/login');
			    });
			  };
			})