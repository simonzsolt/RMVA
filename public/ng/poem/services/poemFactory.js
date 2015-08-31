angular
	.module('versApp')


// =============================POEM FACTORY=============================


		// service for listing, uploading and editing

		.factory('poemFactory', ['$resource', function($resource){

			// var instead of return

			return $resource('/data/:id', {id: '@_id'}, {
				'update' : {method: 'PUT'}

			}) //return $resource
		}]); // poemFactory