angular    
    .module('versApp')


// -----------------------------LIST CONTROLLER-----------------------------


        .controller('listingCtrl', [
            '$scope', 
            '$routeParams', 
            'versFactory', 
            '$location', 
            
            function($scope, $routeParams, versFactory, $location){

                $scope.data = versFactory.query();
                $scope.versId = $routeParams.versId;
                $scope.list_menu = true; // for the "List" menu "ng-hide" attr

                // $scope.hideListBtn = $location.path() === '/list';

                $scope.predicate = '-created_at';

                // deleting items by _id
                $scope.deleteVers = function(vers_id){

                    $scope.del_conf = confirm('Biztosan törölni szeretné a verset?');

                    if ($scope.del_conf === true) {
                        versFactory.delete({id: vers_id}, function(){
                            alert('A vers törölve!');
                        });

                        $scope.data = versFactory.query();

                    }; // if scope del_conf
                }; //$scope.deleteVers
        }]); // controller