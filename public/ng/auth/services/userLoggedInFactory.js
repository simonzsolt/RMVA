angular
	.module('versApp')


// =============================USER FACTORY=============================

		.factory('userLoggedInFactory', function($resource) {
				return $resource('/loggedin');
			})