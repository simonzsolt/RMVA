angular
	.module('versApp')


// =============================USER FACTORY=============================

		.factory('userFactory', function($resource) {
				return $resource('/users/:id', {id: '@_id'}, {
					'update' : {method: 'PUT'}
				})
			})