angular
    .module('versApp')

// -----------------------------GEO CONTROLLER-----------------------------

        // create new vers
        .controller('geoCtrl', [
            '$scope',
            '$log',
            '$http', function( $scope, $log, $http){

                // $scope.searchAPI = function(userInputString, timeoutPromise) {

                //     return $http.get(
                //         '/geo/' + userInputString, 
                //         {q: userInputString}, 
                //         {timeout: timeoutPromise}
                //     );
                // }

                // $scope.selectedObject = function(selected) {
                //     $log.info(selected);
                //     $scope.geoObj = selected;
                // };
            }  
        ])