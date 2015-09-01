angular
	.module('versApp')

// -----------------------------VIEW CONTROLLER-----------------------------

		.controller('viewerCtrl', 
		    
		    function($scope, $routeParams, poemFactory, $location, $anchorScroll) {

		        $scope.vers = poemFactory.get({id: $routeParams.versId}, function(){

		        	if ($scope.vers.acro_int) {
		        		$scope.acroInt = 'Integráns'
		        	}
		        	else { $scope.acroInt = 'Nem integráns' }

		        	// Date object

        			var c = Object.getOwnPropertyNames($scope.vers.date);

        			console.log('c: ' + c + ' | ' +
        				 $scope.vers.date.propertyIsEnumerable(c) 
        			); // single

        			var cc = Object.getOwnPropertyNames($scope.vers.date[c]);

        			console.log('cc: ' + cc + ' | ' +
        				 $scope.vers.date[c].propertyIsEnumerable(cc)
        			); //exact_date

        			var ccc = Object.getOwnPropertyNames($scope.vers.date[c][cc]);

        			console.log('ccc: ' + ccc + ' | ' +
        				 $scope.vers.date[c][cc].propertyIsEnumerable(ccc)
        			);


        			var child = Object.getOwnPropertyNames($scope.vers.date);

        			if($scope.vers.date.propertyIsEnumerable(child)) {
        				console.log(child + ' enumerable');

        				var grandChild = 
        					Object.getOwnPropertyNames($scope.vers.date[child]);

        					if ($scope.vers.date[child].propertyIsEnumerable(grandChild)) {
        						console.log(grandChild + ' enumerable');

        						var greatGrandChild = Object.getOwnPropertyNames(
        								$scope.vers.date[child][grandChild]);

        						if ($scope.vers.date[child][grandChild].
        								propertyIsEnumerable(greatGrandChild)){
        							console.log(greatGrandChild + ' enumerable');
        						}
        						else {
        							console.log(greatGrandChild + ' not enumerable');
        						}
        					};
        			}



		        		
					
		        	// achorscroll
					$anchorScroll.yOffset = ($(window).height())/4;

					$scope.H = $location.hash();

					$scope.goToLine = function goToLine () {

						var lg = $scope.vers.exemplum.locus.lg
						var l  = $scope.vers.exemplum.locus.l;

						$location.hash(lg + '_' + l);
						$anchorScroll();
					};

				});     

		    }) //viewCtrl
