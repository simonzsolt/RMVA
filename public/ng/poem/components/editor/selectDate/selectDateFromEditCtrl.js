angular
	.module('versApp')

		.controller('selectDateFromEditCtrl', function($scope, $routeParams, poemFactory){

			var vers = poemFactory.get({id: $routeParams.versId}, function(){
				

				if ($scope.vers.date.period) {

					// console.log('$scope.vers.date.period: ' + $scope.vers.date.period);
					
					if ($scope.vers.date.period.from) {

						angular.forEach($scope.vers.date.period.from ,function(value, index){
							// console.log('value: ' + value + ' index: ' + index);

							if (index == 'exact_date') 	{$scope.selectDateFromMenu = 'exact_date'};
							if (index == 'only_year') 	{$scope.selectDateFromMenu = 'year'};
							if (index == 'year_month') 	{$scope.selectDateFromMenu = 'year-month'};
							if (index == 'only_cent') 	{$scope.selectDateFromMenu = 'cent'};
							if (index == 'only_fest') 	{$scope.selectDateFromMenu = 'fest'};
						});
					};
				};

				$scope.selectFrom = function(){

					var arrFrom = [];
					$scope.vers.date.single = '';

					// console.log('selectFrom::' + ' $scope.vers.date.single ' +
						// $scope.vers.date.single);

					angular.forEach($scope.vers.date.period.from ,function(value, index){
					
						// console.log('1value: ' + value + ' 1index:  ' + index);

						arrFrom.push({index: value});
					});

					angular.forEach(arrFrom ,function(value, index){
						if(index !== $scope.selectDateFromMenu && arrFrom.length > 0){
							arrFrom.splice(index, 1);
						}
						// console.log('value: ' + value + ' index: ' + index);
					});

					$scope.vers.date.period.from = arrFrom[0];
				}
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
		});