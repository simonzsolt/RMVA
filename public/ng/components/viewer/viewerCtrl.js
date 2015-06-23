angular
	.module('versApp')

// -----------------------------VIEW CONTROLLER-----------------------------

		.controller('viewerCtrl', [
			'$scope', 
			'$routeParams', 
			'versFactory', 
			'$location',
		    
		    function($scope, $routeParams, versFactory, $location) {

		        $scope.versId = $routeParams.versId;

		        $scope.vers = versFactory.get({id: $routeParams.versId});

		    }]) //viewCtrl
