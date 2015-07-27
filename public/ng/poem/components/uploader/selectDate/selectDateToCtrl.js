angular
	.module('versApp')

		.controller('selectDateToCtrl', function($scope){

			$scope.selectdateToMenu = 'exact_date';

			$scope.selectDateMenu = '';

			$scope.selectTo = function(){

				if($scope.selectdateToMenu !== ''){
					var arrTo = [];
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