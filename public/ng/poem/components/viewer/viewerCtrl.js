angular
	.module('versApp')

// -----------------------------VIEW CONTROLLER-----------------------------

		.controller('viewerCtrl', [
			'$scope',
			'$routeParams', 
			'poemFactory',
			'$location',
		    
		    function($scope, $routeParams, poemFactory, $location) {

		        $scope.versId = $routeParams.versId;
		        $scope.vers = poemFactory.get({id: $routeParams.versId});

		    }]) //viewCtrl
