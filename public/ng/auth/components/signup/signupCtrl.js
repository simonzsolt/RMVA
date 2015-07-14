angular
	.module('versApp')

// -----------------------------SIGNUP CONTROLLER-----------------------------

	.controller('signupCtrl', [

		'$scope', 
		'signupFactory',
		'$rootScope',
		'$location',
		'$http', 

		function($scope, signupFactory, $rootScope, $location, $http) {

		$rootScope.message = '';

		$scope.user = {
			username: '',
			password: ''
		}; 

		$scope.signup = function() {

			$rootScope.signupErr = '';

			signupFactory.save($scope.user, function(err, $location) {
				$scope.accounts = signupFactory.query();
				$rootScope.signupErr = err.message;

				if ($rootScope.signupErr) {
					alert($rootScope.signupErr);
				}
				else {
	            	alert('Regisztráció elküldve!');
	            }

	            $rootScope.signupErr = '';

				$scope.user = {
					username: '',
					password: ''
				}; 
			});
		};

	}]) //signupCtrl
