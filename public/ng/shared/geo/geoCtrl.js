angular
    .module('versApp')


// -----------------------------UPLOAD CONTROLLER-----------------------------


        // create new vers
        .controller('geoCtrl', [
            '$scope', 
            '$log',
            'geoFactory',

            function($scope, $log, geoFactory){
                var data = geoFactory.query();
                $log.info(data);
            }
        ])