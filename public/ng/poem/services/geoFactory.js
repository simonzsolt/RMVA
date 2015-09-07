angular
    .module('versApp')

// =============================POEM FACTORY=============================

        .factory('geoFactory', function($resource){

            // return $resource('/geo', {id: '@_id'}, {
            return $resource('/geo/:name', {name: 'name'}) //return $resource
        }); // geoFactory