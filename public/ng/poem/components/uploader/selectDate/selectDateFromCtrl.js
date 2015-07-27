angular
	.module('versApp')

		.controller('selectDateFromCtrl', function($scope){

			$scope.selectdateFromMenu = 'exact_date';

			$scope.selectDateMenu = '';

			$scope.selectFrom = function(){

				if($scope.selectDateFromMenu !== ''){
					var arrFrom = [];
					if($scope.vers.date.period.from){

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
				}
			};

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