angular
	.module('versApp')

		.controller('navCtrl', ['$scope', 'userLoggedInFactory', 'poemFactory', '$routeParams', '$location', '$rootScope', '$route', function(

        	$scope, 
        	userLoggedInFactory,
        	poemFactory, 
        	$routeParams, 
        	$location, 
        	$rootScope, 
        	$route){ 

        $scope.path = $location.path();

        var myPath = $location.path();

        // $scope.pathId = '';

        if (myPath.indexOf('edit') !=-1 ) {
        	var pathId = myPath.replace('/edit/id/', '');
        	$scope.editPathId = '/edit/id/' + pathId;
        }

        if (myPath.indexOf('view') !=-1 ) {
        	var pathId = myPath.replace('/view/id/', '');
        	$scope.viewPathId = '/view/id/' + pathId;
        }

        $rootScope.loggedInUser = userLoggedInFactory.get();

}]);