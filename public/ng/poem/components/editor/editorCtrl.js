angular
	.module('versApp')


// -----------------------------EDITOR CONTROLLER-----------------------------


		.controller('editorCtrl', [
			'$scope', 
			'$routeParams', 
			'poemFactory',
			'$rootScope', 
			'$location',

		    function($scope, $routeParams, poemFactory, $rootScope, $location) {
		        $scope.versId = $routeParams.versId;
		        $scope.vers = poemFactory.get({id: $routeParams.versId}, function(){

					if ($scope.vers.date.single) {
						// console.log('$scope.vers.date.single: ' + $scope.vers.date.single);
						$scope.selectDate = 'single';
					};

					if ($scope.vers.date.period) {
						// console.log('$scope.vers.date.single: ' + $scope.vers.date.single);
						$scope.selectDate = 'period';
					};

					$scope.selectComp = [
				    	'beszédhang', 
						'szótag', 
						'morféma', 
						'szintagma', 
						'mondat'
					];

				});

				// Hierarchy of repeat indexes
				// metrumIn > partIn > compPartIn > symbolIn, limitIn, countIn

		        $scope.vers.metrum = [{

		        	parts: {

			        	range:{
					            non_spec: '',
					            spec: ''
					        },

			        	part: [{

							comp: {
						        name:          '',
						        comp_type:     '',
						        quality:       '',
						        rep:           '',
						        comp_part: [{ 
					                symbols:       [{
					                	symbol: '',
					                	symbol_type:   ''
					                }],
					                
					                limits: [{
					                	limit:         '',
					               		limit_type:    '',
					                }],

					                count: [{ level: '' }]  
						        }]
					    	}
			        	}]
					}
				}];

				// empty date fields when not chosen
				$scope.selectDateMenu = function selectDateMenu(selectDate) {
					if(selectDate == "single"){
						$scope.vers.date.period = '';
					}; 

					if(selectDate == "period"){
						$scope.vers.date.single = '';
					};
		    	};

				// $scope.metrumChange = false;

				// add Part fieldset to form
		        $scope.addPart = function addPart () {
					$scope.vers.metrum.push({
						parts: {

				        	range:{
					            non_spec: '',
					            spec: ''
					        },

				        	part: [{

								comp: {
							        name:          '',
							        comp_type:     '',
							        quality:       '',
							        rep:           '',
							        comp_part: [{ 
						                symbols:       [{
						                	symbol: '',
						                	symbol_type:   ''
						                }],
						                
						                limits: [{
						                	limit:         '',
						               		limit_type:    '',
						                }],

						                count: [{ level: '' }]  
							        }]
						    	}
				        	}]
						}
					});
				};

				// remove Part set from form
				$scope.removePart = function removePart () {
					var lastItem = $scope.vers.metrum.length -1;
					$scope.vers.metrum.splice(lastItem, 1);
				};

				// add Components set to form
				$scope.addComp = function addComp (metrumIn) {
					$scope.vers.metrum[metrumIn].parts.part.push({
						comp: {
					        name:          '',
					        comp_type:     '',
					        quality:       '',
					        rep:           '',
					        comp_part: [{ 
				                symbols:       [{
				                	symbol: '',
				                	symbol_type:   ''
				                }],
				                
				                limits: [{
				                	limit:         '',
				               		limit_type:    '',
				                }],

				                count: [{ level: '' }]  
					        }]
				    	}
					}) 
				};

				// remove Components set from form
				$scope.removeComp = function removeComp (metrumIn, partIn) {
					$scope.vers.metrum[metrumIn].parts.part.splice(partIn, 1);
				};

				// add Subcomponent set to form
				$scope.addCompPart = function addCompPart (metrumIn, partIn) {
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.comp_part.push({
						
						symbols: [{
			                	symbol: '',
			                	symbol_type:   ''
			                }],
			                
			                limits: [{
			                	limit:         '',
			               		limit_type:    '',
			                }],

			                count: [{ level: '' }]  
					})
				};

				// remove Subcomponent set from form
				$scope.removeCompPart = function removeCompPart (metrumIn, partIn, compPartIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.comp_part.splice(
						compPartIn, 1
					)
				};

				// add Symbols set to form 
				$scope.addFieldSymbol = function(metrumIn, partIn, compPartIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.
						comp_part[compPartIn].symbols.push({
						symbol: '', symbol_type: '',
					});
				};

				// remove Symbols set from form
				$scope.removeFieldSymbol = function(metrumIn, partIn, compPartIn, symbolIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.
						comp_part[compPartIn].symbols.splice(symbolIn, 1);
				};

				// add Limits set to form
				$scope.addFieldLimit = function(metrumIn, partIn, compPartIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.
						comp_part[compPartIn].limits.push({
						limit: '', limit_type: '',
					});
				};

				// remove Limits from field 
				$scope.removeFieldLimit = function(metrumIn, partIn, compPartIn, limitIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.
						comp_part[compPartIn].limits.splice(limitIn, 1);
				};
				
			
				// add Counter of levels to form
				$scope.addFieldCount = function(metrumIn, partIn, compPartIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.
						comp_part[compPartIn].count.push({
						level: ''
					});
				};	

				// remove Counter set from form
				$scope.removeFieldCount = function(metrumIn, partIn, compPartIn, countIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.
						comp_part[compPartIn].count.splice(countIn, 1);
				};

//========================Epmty fields scope when hidden========================

				$scope.compTypeNum = function(metrumIn, partIn){
					angular.forEach($scope.vers.metrum[metrumIn].parts.part[partIn] 
							,function(value, index){
								// console.log('value.comp_type: ' + value.comp_type);
								if(value.comp_type == 'szám'){
									$scope.vers.metrum[metrumIn].parts.
										part[partIn].comp.quality = '';
									$scope.vers.metrum[metrumIn].parts.
									part[partIn].comp.rep = '';
								}
							});
				};

				$scope.qualityPartial = function(metrumIn, partIn){
					angular.forEach($scope.vers.metrum[metrumIn].parts.part[partIn] 
						,function(value, index){
							if(value.quality == 'teljes'){
								$scope.vers.metrum[metrumIn].parts.
									part[partIn].comp.rep = '';
							}
					});
				};


				$scope.rangeMiddle = function(metrumIn){
					angular.forEach($scope.vers.metrum[metrumIn].parts.range
						,function(value, index){
							if(
								value == 'Vers eleje' || 
								value == 'Vers vége') {

								$scope.vers.metrum[metrumIn].parts.range.spec = '';
							}
					});
				};
/*
				$scope.vers.reflect = {
					ref_genre: [{
						name: 	'',
					    desc: 	'',
					    locus: 	''
					}],
					ref_input: [{
						name: 	'',
					    desc: 	'',
					    locus: 	''
					}],
					ref_edit: [{
						name: 	'',
					    desc: 	'',
					    locus: 	''
					}],
					ref_func: [{
						name: 	'',
					    desc: 	'',
					    locus: 	''
					}],
					ref_circum: [{
						name: 	'',
					    desc: 	'',
					    locus: 	''
					}]
				};

*/
				// add Genre ref fieldset to form
		        $scope.addRef = function addRef (refBtn) {
					$scope.vers.reflect[refBtn].push({
						name: 	'',
					    desc: 	'',
					    locus: 	''
					});
				};

				// remove Genre ref set from form
				$scope.removeRef = function removeRef (refBtn) {
					var lastItem = $scope.vers.reflect[refBtn].length -1;
					$scope.vers.reflect[refBtn].splice(lastItem, 1);
				};

		        $scope.data = poemFactory.query(); 

// _____________________________EDIT VERS_____________________________


		    $scope.editVers = function() {

		    	$scope.vers.mod_by = $rootScope.loggedInUser.nickname;

		    	$scope.selectDate = '';

		    	if($rootScope.loggedInUser.role !== 'user') {

					$scope.edit_conf = confirm('Biztosan módosítani akarja a verset?');

			        if($scope.edit_conf === true) {

			        poemFactory.update($scope.vers, function($location){

			        }); // poemFactory.update

			        // for list to reload this needs to be here
			        $scope.data = poemFactory.query();

			        $location.path( "/list" );
			        alert('Sikeres feltöltés!');

			        };   
		    	}

		    	else {
		    		alert('Nincs jogosultsága a művelethez!');
		    	}
	  
		    }; //editVers
		}]); //editCtrl
