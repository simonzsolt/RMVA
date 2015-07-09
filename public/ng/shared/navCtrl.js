angular.module('versApp')

.controller('navCtrl', ['$scope', '$routeParams', '$location', '$rootScope', '$route',
    function($scope, $routeParams, $location, $rootScope, $route){ 
        $scope.path = $location.path();
    //
}]);