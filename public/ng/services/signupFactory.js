angular
	.module('versApp')


// =============================USER FACTORY=============================

		.factory('signupFactory', function($resource) {
				return $resource('/auth/:id', {id: '@_id'}, {
					'update' : {method: 'PUT'}
				})
			})