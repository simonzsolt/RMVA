angular
	.module('versApp')

// -----------------------------SIGNUP CONTROLLER-----------------------------

	.controller('signupCtrl', [

		'$scope', 
		'userFactory',
		'$location', 

		function($scope, userFactory, $location) {

		$scope.user = {
			username: '',
			password: ''
		}; 

		$scope.signup = function() {

			userFactory.save($scope.user, function($location) {
				$scope.accounts = userFactory.query();

				$scope.user = {
					username: '',
					password: ''
				}; 
			});

            alert('Regisztráció elküldve!');
            $location.path( "/" );
		};
	    }]) //signupCtrl
