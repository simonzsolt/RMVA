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

		            trad_genre: '',

				    exemplum: '',

				    commonplace: '',

				    topos: '',

				    intertext: '',

				    communicate: '',

				    figure: '',
				    trope: '',
				    comm_ret: '',

				    theme: '',

				    reflect: '',

		            created_at: '', 
		            created_by: $rootScope.loggedInUser.nickname, 
		            last_mod: '',    
		            mod_by: '' 

		        }; // $scope.vers

// ============================ADD AND REMOVE FILEDS============================

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
		        $scope.addRefGen = function addRefGen () {
					$scope.vers.reflect.ref_genre.push({
						name: 	'',
					    desc: 	'',
					    locus: 	''
					});
				};

				// remove Genre ref set from form
				$scope.removeRefGen = function removeRefGen () {
					var lastItem = $scope.vers.reflect.ref_genre.length -1;
					$scope.vers.reflect.ref_genre.splice(lastItem, 1);
				};

				// add Reader Input fieldset to form
		        $scope.addRefInput = function addRefInput () {
					$scope.vers.reflect.ref_input.push({
						name: 	'',
					    desc: 	'',
					    locus: 	''
					});
				};

				// remove Reader Input set from form
				$scope.removeRefInput = function removeRefInput () {
					var lastItem = $scope.vers.reflect.ref_input.length -1;
					$scope.vers.reflect.ref_input.splice(lastItem, 1);
				};

				// add Edit ref fieldset to form
		        $scope.addRefEdit = function addRefEdit () {
					$scope.vers.reflect.ref_edit.push({
						name: 	'',
					    desc: 	'',
					    locus: 	''
					});
				};

				// remove Edit ref set from form
				$scope.removeRefEdit = function removeRefEdit () {
					var lastItem = $scope.vers.reflect.ref_edit.length -1;
					$scope.vers.reflect.ref_edit.splice(lastItem, 1);
				};

				// add Function ref fieldset to form
		        $scope.addRefFunc = function addRefFunc () {
					$scope.vers.reflect.ref_func.push({
						name: 	'',
					    desc: 	'',
					    locus: 	''
					});
				};

				// remove Function ref set from form
				$scope.removeRefFunc = function removeRefFunc () {
					var lastItem = $scope.vers.reflect.ref_func.length -1;
					$scope.vers.reflect.ref_func.splice(lastItem, 1);
				};

				// add Circumstance ref fieldset to form
		        $scope.addRefcircum = function addRefcircum () {
					$scope.vers.reflect.ref_circum.push({
						name: 	'',
					    desc: 	'',
					    locus: 	''
					});
				};

				// remove Circumstance ref set from form
				$scope.removeRefcircum = function removeRefcircum () {
					var lastItem = $scope.vers.reflect.ref_circum.length -1;
					$scope.vers.reflect.ref_circum.splice(lastItem, 1);
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

				                    trad_genre: '',

								    exemplum: '',

								    commonplace: '',

								    topos: '',

								    intertext: '',

								    communicate: '',

								    figure: '',
								    trope: '',
								    comm_ret: '',

								    theme: '',

								    reflect: '',

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