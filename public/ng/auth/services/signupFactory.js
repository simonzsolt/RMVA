angular
	.module('versApp')


// =============================USER FACTORY=============================

		.factory('signupFactory', ['$resource', function($resource) {
				return $resource('/auth/:id', {id: '@_id'}, {
					'update' : {method: 'PUT'}
				})
			}])