angular
	.module('versApp')


// =============================USER FACTORY=============================

		.factory('userLoggedInFactory', ['$resource', function($resource) {
				return $resource('/loggedin');
			}])