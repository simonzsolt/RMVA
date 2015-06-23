angular
	.module('versApp')


// =============================FACTORY=============================


		// service for listing, uploading and editing

		.factory('versFactory', function($resource){

			// var instead of return

			return $resource('/data/:id', {id: '@_id'}, {
				'update' : {method: 'PUT'}

			}) //return $resource
		}); // versFactory