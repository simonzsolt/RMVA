angular.module('versApp')

.controller('navCtrl', ['$scope', '$routeParams', 'versFactory', '$location', '$rootScope', '$route',
    function($scope, $routeParams, versFactory, $location, $rootScope, $route){ 
        $scope.path = $location.path();
    //
}]);