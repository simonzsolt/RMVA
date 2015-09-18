angular
    .module('versApp')

// =============================POEM FACTORY=============================

        .factory('geoFactory', function($resource, $q, $http){

            function geoFactory() {

                this.get = function() {
                    var deferredObject =   $q.defer();

                    $resource('/geo/:name', {name: 'name'})
                        .get()
                        .$promise
                        .then(function(result){
                            deferredObject.resolve(result);
                            console.log(result);
                        }, function(err){
                            deferredObject.resolve(err);
                        });

                    return deferredObject.promise
                }
            }

            return new geoFactory();            

            // return $resource('/geo', {id: '@_id'}, {
            // return $resource('/geo/:name', {name: 'name'}) //return $resource
        }); // geoFactory