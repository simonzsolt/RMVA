angular    
    .module('versApp')


// -----------------------------LIST CONTROLLER-----------------------------


        .controller('listingCtrl', [
            '$scope', 
            '$routeParams', 
            'poemFactory',
            '$location', 
            
            function($scope, $routeParams, poemFactory, $location){

                $scope.data = poemFactory.query();
                $scope.versId = $routeParams.versId;
                $scope.list_menu = true; // for the "List" menu "ng-hide" attr
                
                $scope.predicate = '-created_at';


                // deleting items by _id
                $scope.deleteVers = function(vers_id){

                    $scope.del_conf = confirm(
                        'Biztosan törölni szeretné ezt a verset? RMVA: ' + vers_id);

                    if ($scope.del_conf === true) {
                        poemFactory.delete({id: vers_id}, function(){
                            alert('A vers törölve!');
                        });

                        $scope.data = poemFactory.query();

                    }; // if scope del_conf
                }; //$scope.deleteVers
        }]); // controller