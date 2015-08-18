angular
	.module('versApp')


// =============================USER FACTORY=============================

		.factory('userFactory', ['$resource', function($resource) {
				return $resource('/users/:id', {id: '@_id'}, {
					'update' : {method: 'PUT'}
				})
			}])