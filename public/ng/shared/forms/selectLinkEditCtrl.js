angular
	.module('versApp')

		.controller('selectLinkEditCtrl', function($scope, $resource, $routeParams){
			
			// console.log('vers.link_coll: ' + $scope.vers.link_coll);

			$scope.array = []; 
				var data = $resource('/data/:id', {id: '@_id'});
				var allData = data.query(function(){
					console.log('done: ' + allData.length);
					angular.forEach(allData, function(value, index){
		    			console.log('value: ' + value + ' index ' + index);
		    			$scope.array.push({rmva: value.rmva, title: value.title});
		    		});
				});

			
			/*==============================================================================|
			|																				|
			|	IF ARRAY CONTAINS SOME ELEMENT FROM VERS.LINK_COLL IT MUST BE REMOVED		|
			|	OTHERWISE ARRAY CAN BE THE TOTAL SUM OF ALL RMVA FIELDS						|
			|	ARRAY: EXLUDE ALL ELEMENTS FROM VERS.LINK_COLL 								|
			|																				|
			||=============================================================================*/

				
			
		}); // Ctrl
			












/*
// =============================================================================================
// console.log('done: ' + allData.length);

					angular.forEach(allData, function(value, index){
		    			// console.log('value data: ' + value.rmva + ' index ' + index);
		    			totalArr.push(value.rmva);
		    			console.log('value scope: ' + value + ' index ' + index);
		    			$scope.array.push({rmva: value.rmva, title: value.title});
		    		});

		    		// angular.forEach(allData, function(value, index){
		    		// 	console.log('value scope: ' + value + ' index ' + index);
		    		// 	$scope.array.push({rmva: value.rmva, title: value.title});
		    		// });



		    		angular.forEach(totalArr, function(value, index){
						console.log('value totalArr: ' + value + ' index ' + index);

					});

		    		var editedArr = []; 

					angular.forEach(editedArrLinks.link_coll, function(value, index){
						// console.log('value editedArrLinks.link_coll.rmva: ' + value.rmva + ' index ' + index);
						// console.log(totalArr.indexOf(value));
						// editedArr.push(value.rmva);
						console.log('searched value.rmva: ' + value.rmva +
							 ' result index: ' + totalArr.indexOf(value.rmva));
						if (totalArr.indexOf(value.rmva) > -1) {
							totalArr.splice(totalArr.indexOf(value.rmva), 1);
						}
						angular.forEach(totalArr, function(value, index){
							// console.log('value totalArr after splice: ' + 
							// 	value + ' index ' + index);
						});

					});

					
						angular.forEach(totalArr, function(value, index){
							console.log('value totalArr final splice: ' + 
								value + ' index ' + index);
						});

					var allDataArr = [];

					angular.forEach(allData, function(value, index){
						console.log('value.rmva: ' + value.rmva
							+ ' value.title: ' + value.title 
							+ ' index ' + index );
						allDataArr.push(value.rmva);

					});

					// angular.forEach(allDataArr, function(value, index){
					// 	console.log('value allDataArr: ' + value + ' index ' + index);
					// });

					var choiceArrIndex = [];

					angular.forEach(totalArr, function(value, index){	
						// console.log(value);
						console.log('index of totalArr in allDataArr: ' +
						 allDataArr.indexOf(value));
						choiceArrIndex.push(allDataArr.indexOf(value));
					});

					var choiceArr = [];

					angular.forEach(choiceArrIndex, function(value, index){
						console.log('titles: ' + allData[value].title);
						console.log('values choiceArrIndex: ' + value);
						choiceArr.push({
							rmva: 	allData[value].rmva, 
							title:  allData[value].title
						})
					});

					angular.forEach(choiceArr, function(value, index){
						console.log('choiceArr value.rmva: ' + value.rmva
							+ ' value.title: ' + value.title 
							+ ' index ' + index );
						allDataArr.push(value.rmva);

					});

					$scope.array = choiceArr;*/