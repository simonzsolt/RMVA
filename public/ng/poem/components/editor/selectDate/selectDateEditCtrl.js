angular
	.module('versApp')

		.controller('selectDateEditCtrl', function($scope, $routeParams, poemFactory){

			var vers = poemFactory.get({id: $routeParams.versId}, function(){

				if(vers.date){
					var indxArr = [];
					angular.forEach(vers.date, function(value, index){
						indxArr.push(index);
						
						if(index == 'approx'){ $scope.selectDateApprox = true; }
					});

					if(indxArr.indexOf('approx') > -1){
						indxArr.splice(indxArr.indexOf('approx'), 1);
					}

					$scope.selectDateMenu = indxArr[0];

					if(indxArr.length == 2){$scope.selectDateMenu = 'year-month'}

					// $scope.vers.period = '';
				}


				if(vers.period){
					var indxArr = [];
					$scope.selectDateMenu = 'period';
					

					angular.forEach(vers.period.from, function(value, index){
						
						indxArr.push(index);

						if(index == 'approx'){$scope.selectDateFromApprox = true}
						
					});

					if(indxArr.indexOf('approx') > -1){
						indxArr.splice(indxArr.indexOf('approx'), 1);
					}

					$scope.selectDateFromMenu = indxArr[0];

					if(indxArr.length == 2){
						$scope.selectDateFromMenu = 'year-month'
					}

					var indxArr = [];

					angular.forEach(vers.period.to, function(value, index){
						console.log('value_from: ' + value + ' index_from: ' + index);

						indxArr.push(index);
						
						if(index == 'approx'){ $scope.selectDateToApprox = true; }
					});

					console.log('$scope.selectDateToMenu: ' + $scope.selectDateToMenu + 
						'  ' + 'indxArr[0]: ' + indxArr[0]);

					if(indxArr.indexOf('approx') > -1){
						indxArr.splice(indxArr.indexOf('approx'), 1);
					}
					

					$scope.selectDateToMenu = indxArr[0];

					console.log('$scope.selectDateToMenu: ' + $scope.selectDateToMenu + 
						'  ' + 'indxArr[0]: ' + indxArr[0]);
						
						
					if(indxArr.length == 2){
						$scope.selectDateToMenu = 'year-month'
					}

					var indxArr = [];

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