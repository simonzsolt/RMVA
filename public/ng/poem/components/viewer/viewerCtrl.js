angular
	.module('versApp')

// -----------------------------VIEW CONTROLLER-----------------------------

		.controller('viewerCtrl', 
		    
		    function($scope, $routeParams, poemFactory, $location) {

		        $scope.vers = poemFactory.get({id: $routeParams.versId}, function(){

					if ($scope.vers.date.single) {
						// console.log('$scope.vers.date.single: ' + $scope.vers.date.single);
						$scope.selectDate = 'single';
					};

					if ($scope.vers.date.period) {
						// console.log('$scope.vers.date.single: ' + $scope.vers.date.single);
						$scope.selectDate = 'period';
					};

				});     

		    }) //viewCtrl
