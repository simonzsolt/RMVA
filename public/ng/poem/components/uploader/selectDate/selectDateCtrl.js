angular
	.module('versApp')

		.controller('selectDateCtrl', function($scope){


			$scope.select = function(){

				if($scope.selectDateMenu !== 'period'){
					var Arr = [];
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

					// $scope.vers.date.period.from = '';
					// $scope.vers.date.period.to 	 = '';
				}

				if($scope.selectDateMenu == 'period'){
					$scope.vers.date.single = '';
					console.log('per');
				}
			}


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