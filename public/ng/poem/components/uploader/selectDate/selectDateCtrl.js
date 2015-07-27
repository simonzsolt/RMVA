angular
	.module('versApp')

		.controller('selectDateCtrl', function($scope){

			$scope.selectDateMenu = '';

			$scope.selectdateFromMenu = '';

			$scope.selectDateToMenu = '';



			$scope.checkApprox = function(){

			};

			$scope.select = function(){

				// console.log('dateCtrl $scope.selectDateMenu: ' + $scope.selectDateMenu);
				if($scope.selectDateMenu !== 'period'){
					// console.log('not period');
					var Arr = [];
					angular.forEach($scope.vers.date.single ,function(value, index){
						console.log('value: ' + value + ' index: ' + index);

						Arr.push({index: value});

					});

					// $scope.vers.date.single.approx = '';
					// $scope.selectDateApprox = false;


					angular.forEach(Arr ,function(value, index){

						console.log('Arr value: ' + value + ' Arr index: ' + index);

						if(index !== $scope.selectDateMenu){

							Arr.splice(Arr.indexOf($scope.vers.date.single.approx));

							// $scope.vers.date.single.approx = '';
							// $scope.selectDateApprox = false;


								Arr.splice(index, 1);

						}
					});

					$scope.vers.date.single = Arr[0];

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