angular
	.module('versApp')

// -----------------------------SIGNUP CONTROLLER-----------------------------

	.controller('signupCtrl', [

		'$scope', 
		'signupFactory',
		'$location', 

		function($scope, signupFactory, $location) {

		$scope.user = {
			username: '',
			password: ''
		}; 

		$scope.signup = function() {

			signupFactory.save($scope.user, function($location) {
				$scope.accounts = signupFactory.query();

				$scope.user = {
					username: '',
					password: ''
				}; 
			});

            alert('Regisztráció elküldve!');
            $location.path( "/" );
		};
	    }]) //signupCtrl
