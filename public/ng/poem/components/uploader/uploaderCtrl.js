angular
	.module('versApp')


// -----------------------------UPLOAD CONTROLLER-----------------------------


		// create new vers
		.controller('uploaderCtrl', [
			'$scope', 
			'poemFactory',
			'$rootScope',
			'$location',

		    function($scope, poemFactory, $rootScope, $location){

		    	$rootScope.data = poemFactory.query();

		    	$scope.selectDate = '';

		    	$scope.selectComp = [
			    	'beszédhang', 
					'szótag', 
					'morféma', 
					'szintagma', 
					'mondat'
				];
		    	
		    	if (!$rootScope.loggedInUser) {
		    		console.log('no user');
		    		$location.path('/list');
		    	}

		        $scope.vers = {

		            rmva: '', 
		            inc: '', 

		            auth_role_name: '',
		            auth_surname: '',
		            auth_add_name: '',
		            auth_forename: '',

		            title: '', 
		            arg: '', 
		            adnotam: '', 
		            acro: '', 
		            acro_int: '', 
		            krono: '', 
		            head: '', 

		            signo_type: '',
		            signo_role_name: '',
		            signo_surname: '',
		            signo_add_name: '',
		            signo_forename: '',

		            lenght: '', 
		            lenght_unit: '',

		            metrum: '',

		            col: '', 
		            date: '', 
		            date_info: '', 
		            place: '', 
		            place_info: '', 
		            conf: '', 
		            source: '', 
		            text: '', 
		            imgs: '',        
		            link_coll: '', 
		            created_at: '', 
		            created_by: $rootScope.loggedInUser.nickname, 
		            last_mod: '',    
		            mod_by: '' 

		        }; // $scope.vers


		        $scope.vers.metrum = [{

		        	parts: {

			        	part_range: '',

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

				// $scope.metrumChange = false;

		        $scope.addPart = function addPart () {
					$scope.vers.metrum.push({
						parts: {

				        	part_range: '',

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

				$scope.removePart = function removePart () {
					var lastItem = $scope.vers.metrum.length -1;
					$scope.vers.metrum.splice(lastItem, 1);
				};


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

				$scope.removeComp = function removeComp (metrumIn, partIn) {
					$scope.vers.metrum[metrumIn].parts.part.splice(partIn, 1);
				};

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

				$scope.removeCompPart = function removeCompPart (metrumIn, partIn, compPartIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.comp_part.splice(
						compPartIn, 1
					)
				};

				$scope.addFieldSymbol = function addFieldSymbol (metrumIn, partIn, compPartIn){
					$scope.vers.metrum[metrumIn].parts.part[partIn].comp.comp_part[compPartIn].symbols.push({
						symbol: '', symbol_type:   ''
					});
					console.log('partIn: ' + partIn);
				};

				$scope.removeFieldSymbol = function(compIn, partIn, symbolIn){
					$scope.vers.metrum[compIn].comp.comp_part[partIn].symbols.splice(symbolIn, 1);
				};

				
				$scope.addFieldLimit = function(compIn, partIn){
					$scope.vers.metrum[compIn].comp.comp_part[partIn].limits.push({
						limit: '', limit_type: '',
					});
				};

				$scope.removeFieldLimit = function(compIn, partIn, limitIn){
					$scope.vers.metrum[compIn].comp.comp_part[partIn].limits.splice(limitIn, 1);
				};

			

				$scope.addFieldCount = function(compIn, partIn){
					$scope.vers.metrum[compIn].comp.comp_part[partIn].count.push({
						level: ''
					});
				};	

				$scope.removeFieldCount = function(compIn, partIn, countIn){
					$scope.vers.metrum[compIn].comp.comp_part[partIn].count.splice(countIn, 1);
				};



				/*TODO: DELETE HIDDEN FIELDS!!!*/
/*
				$scope.compTypeNum = function(){
					angular.forEach($scope.vers.metrum ,function(value, index){
						if(value.comp.comp_type == 'szám'){
							delete $scope.vers.metrum[index].comp.quality;
							delete $scope.vers.metrum[index].comp.rep;
						}
					});
				};

				$scope.qualityPartial = function(){
					angular.forEach($scope.vers.metrum ,function(value, index){
						if(value.comp.quality == 'teljes'){
							delete $scope.vers.metrum[index].comp.rep;
						}
					});
				};
*/
				// $scope.

				$scope.addFieldPart = function(compIn, partIn){
					$scope.vers.metrum[compIn].comp.comp_part.push({ 
			               symbols: [{
			                	symbol: '',
			                	symbol_type:   ''
			                }],

			               	limits: [{
			                	limit:         '',
			               		limit_type:    '',
			                }],

			                count:         [{ level: '' }]  
			        });
					
				};

				$scope.removeFieldPart = function(compIn, partIn){
					$scope.vers.metrum[compIn].comp.comp_part.splice(partIn, 1);
				};

				




		// _____________________________CREATE NEW VERS_____________________________

		        $scope.postVers = function() {

		        	if ($rootScope.loggedInUser.role !== 'user') {		        		

		        		$scope.post_conf = confirm('Biztosan fel akarja tölteni a ezt a verset?');

		            	if( $scope.post_conf === true ) {

				            poemFactory.save($scope.vers, function($location){
				                $scope.data = poemFactory.query();

				                 $scope.vers = {
				                    rmva: '', 
				                    inc: '', 

				                    auth_role_name: '',
				                    auth_surname: '',
				                    auth_add_name: '',
				                    auth_forename: '',

				                    title: '', 
				                    arg: '', 
				                    adnotam: '', 
				                    acro: '', 
				                    acro_int: '', 
				                    krono: '', 
				                    head: '', 

				                    signo_type: '',
				                    signo_role_name: '',
				                    signo_surname: '',
				                    signo_add_name: '',
				                    signo_forename: '',

				                    lenght: '', 
				                    lenght_unit: '', 

				                    metrum: '',

				                    col: '', 
				                    date: '', 
				                    date_info: '', 
				                    place: '', 
				                    place_info: '', 
				                    conf: '', 
				                    source: '', 
				                    text: '', 
				                    imgs: '',        
				                    link_coll: '', 
				                    created_at: '', 
				                    created_by: '', 
				                    last_mod: '',    
				                    mod_by: '' 

				                }; // $scope.vers
				            }); // poemFactory
				            
				            $location.path( "/list" );
				            alert('Sikeres feltöltés!');
				        } // if conf

				        else {
				            alert('Mégsem!');
				        } // else

				    } // if loggeding == user

				    else {
				    	alert('Nincs jogosultsága a művelethez!');
				    }
		        }; // $scope.postVers
		}]); // uploadCtrl