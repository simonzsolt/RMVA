angular
	.module('versApp')


// =============================USER FACTORY=============================

		.factory('profileFactory', ['$resource', function($resource) {
				return $resource('/profile/:id', {id: '@_id'}, {
					'update' : {method: 'PUT'}
				})
			}])