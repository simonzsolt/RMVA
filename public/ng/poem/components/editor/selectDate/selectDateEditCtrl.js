angular
	.module('versApp')

		.controller('selectDateEditCtrl', function($scope, $routeParams, poemFactory){

			var vers = poemFactory.get({id: $routeParams.versId}, function(){

				if ($scope.vers.date.single) {

					angular.forEach($scope.vers.date.single ,function(value, index){

						if (index == 'exact_date') 	{$scope.selectDateMenu = 'exact_date'};
						if (index == 'only_year') 	{$scope.selectDateMenu = 'year'};
						if (index == 'year_month') 	{$scope.selectDateMenu = 'year_month'};
						if (index == 'only_cent') 	{$scope.selectDateMenu = 'cent'};
						if (index == 'only_fest') 	{$scope.selectDateMenu = 'fest'};
					
					});
				};

				$scope.select = function(){

					var Arr = [];
					$scope.vers.date.period = '';

					angular.forEach($scope.vers.date.single ,function(value, index){

						Arr.push({index: value});
					});

					angular.forEach(Arr ,function(value, index){
						if(index !== $scope.selectDateMenu){

							Arr.splice(Arr.indexOf($scope.vers.date.single.approx));
							Arr.splice(index, 1);
						}
					});
					$scope.vers.date.single = Arr[0];
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
		});