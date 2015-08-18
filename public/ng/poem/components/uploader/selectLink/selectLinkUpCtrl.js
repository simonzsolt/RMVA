angular
	.module('versApp')

		.controller('selectLinkUpCtrl', ['$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams){

			$scope.array = [];

			var data = $resource('/data/:id', {id: '@_id'});
			var allData = data.query(function(){	
				angular.forEach(allData, function(value, index){			
	    			$scope.array.push(value.rmva);

	    		}); // forEach allData
			}); // allData = data.query
		}]); // Ctrl