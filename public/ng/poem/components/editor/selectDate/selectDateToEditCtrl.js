angular
	.module('versApp')

		.controller('selectDateToEditCtrl', ['$scope', '$routeParams', 'poemFactory', function($scope, $routeParams, poemFactory){

			var vers = poemFactory.get({id: $routeParams.versId}, function(){				

				if ($scope.vers.date.period) {

					if ($scope.vers.date.period.to) {
						angular.forEach($scope.vers.date.period.to ,function(value, index){
							// console.log('value: ' + value + ' index: ' + index);

							if (index == 'exact_date') 	{$scope.selectDateToMenu = 'exact_date'};
							if (index == 'only_year') 	{$scope.selectDateToMenu = 'year'};
							if (index == 'year_month') 	{$scope.selectDateToMenu = 'year_month'};
							if (index == 'only_cent') 	{$scope.selectDateToMenu = 'cent'};
							if (index == 'only_fest') 	{$scope.selectDateToMenu = 'fest'};
						});
					};
				};

				$scope.selectTo = function(){

					var arrTo = [];
					$scope.vers.date.single = '';

					if($scope.vers.date.period.to){

						angular.forEach($scope.vers.date.period.to ,function(value, index){
						
							// console.log('1value: ' + value + ' 1index:  ' + index);

							arrTo.push({index: value});
						});

						angular.forEach(arrTo ,function(value, index){
							if(index !== $scope.selectdateToMenu && arrTo.length > 0){
								arrTo.splice(index, 1);
							}
							// console.log('value: ' + value + ' index: ' + index);
						});

						$scope.vers.date.period.to = arrTo[0];
					}
				};

			});

			$scope.months = [
				"Január",		
				"Február",		
				"Március",		
				"Április",		
				"Május",		
				"Június",		
				"Július",		
				"Augusztus",		
				"Szeptember",		
				"Október",		
				"November",		
				"December"
			];

			$scope.dateOptions = {
	    		autoSize: true,
	    		defaultDate:'1600-01-01',
		        changeYear: true,
		        changeMonth: true,
		        yearRange: '1600:1800',
		        dateFormat: 'yy-mm-dd',
		        dayNamesMin: 
		        [ 
		        	"V",
		        	"H", 
		        	"K", 
		        	"Sze", 
		        	"Cs", 
		        	"P", 
		        	"Sz" 
		        ],
		        monthNamesShort: 
		        [ 
		        	"Jan", 
		        	"Feb", 
		        	"Már", 
		        	"Ápr", 
		        	"Máj", 
		        	"Jun", 
		        	"Júl", 
		        	"Aug", 
		        	"Szep", 
		        	"Okt", 
		        	"Nov", 
		        	"Dec" 
		        ],
		         firstDay: 1
		    };
		}]);
