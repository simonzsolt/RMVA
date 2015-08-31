angular
	.module('versApp')

// -----------------------------VIEW CONTROLLER-----------------------------

		.controller('viewerCtrl', 
		    
		    ['$scope', '$routeParams', 'poemFactory', '$location', '$anchorScroll', function($scope, $routeParams, poemFactory, $location, $anchorScroll) {

		        $scope.vers = poemFactory.get({id: $routeParams.versId}, function(){

					if ($scope.vers.date.single) {
						// console.log('$scope.vers.date.single: ' + $scope.vers.date.single);
						$scope.selectDate = 'single';
					};

					if ($scope.vers.date.period) {
						// console.log('$scope.vers.date.single: ' + $scope.vers.date.single);
						$scope.selectDate = 'period';
					};

					$anchorScroll.yOffset = ($(window).height())/4;

					$scope.H = $location.hash();

					$scope.goToLine = function goToLine () {

						var lg = $scope.vers.exemplum.locus.lg
						var l  = $scope.vers.exemplum.locus.l;

						$location.hash(lg + '_' + l);
						$anchorScroll();
					};

				});     

		    }]) //viewCtrl
