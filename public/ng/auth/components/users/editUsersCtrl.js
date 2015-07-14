angular
	.module('versApp')

// -----------------------------VIEW CONTROLLER-----------------------------

		.controller('editUsersCtrl', [
			'$scope',
			'$routeParams', 
			'userFactory',
			'$location',
		    
		    function($scope, $routeParams, userFactory, $location) {

		        $scope.userId = $routeParams.userId;

		        $scope.user = userFactory.get({id: $routeParams.userId});

		    }]) //viewCtrl
