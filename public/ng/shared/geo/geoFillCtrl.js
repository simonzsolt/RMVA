angular
    .module('versApp')
 
        .controller('geoFillCtrl', [
            '$scope',
            '$q',
            '$log',
            'geoFactory',

            function( $scope, $q, $log, geoFactory ){

                var geoQuery = function() {

                    geoFactory.get({name: 'Vác'})
                        .then(function(data){

                            $log.info('promise on success: ' + data);
                            return data;

                        }, function(err){
                            console.log('err ' + err);
                        });
                };
            }  
        ])
  
   
    