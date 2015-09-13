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
						        name: 		'',
						        comp_type:  '',
						        quality:    '',
						        rep:        '',
						        length: 	'',
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

// ========================METRUM========================

				$scope.vers.metrum = [{

					levels: {

						level: [{

					        comp: {
					            name:       '',
					            comp_type:  '',
					            quality:    '',
					            rep:        '',
					            symbols: [{
						            symbol: '',
						            rule:   '',
					                limit:  '',
					                limit_pos: '',
					                num:    ''
						        }]
					        }
					    }]
					}
				}];

				$scope.addLevel = function addLevel(metrumIn){
					$scope.vers.metrum.push({
					
						levels: {

							level: [{

						        comp: {
						            name:       '',
						            comp_type:  '',
						            quality:    '',
						            rep:        '',
						            symbols: [{
							            symbol: '',
							            rule:   '',
										limit:  '',
										limit_pos: '',
										num:    ''
							        }]
						        }
						    }]
						}
					});
				};

				$scope.removeLevel = function removeLevel(metrumIn){
					var lastItem = $scope.vers.metrum.length -1;
					$scope.vers.metrum.splice(lastItem, 1);
				};

				$scope.addComp = function addComp(metrumIn, levelIn){
					$scope.vers.metrum[metrumIn].levels.level.push({
						comp: {
				           	name:       '',
				            comp_type:  '',
				            quality:    '',
				            rep:        '',
				            symbols: [{
					            symbol: '',
					            rule:   '',
					            limit: 	'',
					            limit_pos: '',
					            num:    ''
					        }]
				        }
					});
				};

				$scope.removeComp = function removeComp(metrumIn, levelIn){
					$scope.vers.metrum[metrumIn].levels.level.splice(levelIn, 1);
				};

				$scope.addSymbol = function addSymbol(metrumIn, levelIn, symbolIn){
					$scope.vers.metrum[metrumIn].
						levels.level[levelIn].comp.symbols.push({
							symbol:     '',
					            rule: 	'',
					            limit:  '',
					            limit_pos: '',
					            num:    ''
						});
				};				

//========================Epmty fields scope when hidden========================

/*
*	If restrictions are applied to fields showing.	
*/

// ===============================REFLECT========================================

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
