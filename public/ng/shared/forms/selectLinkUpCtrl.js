angular
	.module('versApp')

		.controller('selectLinkUpCtrl', function($scope, $resource, $routeParams){
			
			console.log('vers.link_coll: ' + $scope.vers.link_coll.length);
			if ($scope.vers.link_coll.length == 0) {
				$scope.array = [];
				var data = $resource('/data/:id', {id: '@_id'});
				var allData = data.query(function(){
					console.log('done: ' + allData.length);
					angular.forEach(allData, function(value, index){
		    			console.log('value: ' + value + ' index ' + index);
		    			$scope.array.push({rmva: value.rmva, title: value.title});
		    		});
				});
			};

		});
			