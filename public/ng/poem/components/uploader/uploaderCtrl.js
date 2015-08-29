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

		            length: '', 
		            length_unit: '',

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

		        // empty date fields when not chosen
				$scope.selectDateMenu = function selectDateMenu(selectDate) {
					if(selectDate == "single"){
						$scope.vers.date.period = '';
					}; 

					if(selectDate == "period"){
						$scope.vers.date.single = '';
					};
		    	};


// ============================TEXT EDITOR============================
				
				$scope.textLines = '';
				$scope.textVerse = '';
				$scope.textarea = function textarea() {

					var str = $scope.vers.text;
					$scope.vers.text = str.replace(/(\n){3,}/g, '\n\n');

					var count = 0;
					var posLine = str.indexOf('\n');
					var posVerse = str.indexOf('\n\n');
					var pos = str.indexOf('\n\n');

					var count = 0;
					while (posVerse !== -1) {
					  count++;
					  posVerse = str.indexOf('\n\n', posVerse + 1);
					}

					$scope.textVerse = count +1;

					var count = 0;
					while (posLine !== -1) {
					  count++;
					  posLine = str.indexOf('\n', posLine + 1);
					}
					$scope.textLines = count +1 - ($scope.textVerse-1);

					// $scope.vers.text = str.replace(/(\n){3,}/g, '\n\n');
				};

// METRUM

// Hierarchy of repeat indexes
// metrumIn > partIn > compPartIn > symbolIn, limitIn, countIn


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


// REFLECT
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

		// _____________________________CREATE NEW VERS_____________________________

		        $scope.postVers = function() {

		        	if ($rootScope.loggedInUser.role !== 'user') {		        		

		        		$scope.post_conf = confirm(
		        			'Biztosan fel akarja tölteni a ezt a verset?');

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

				                    length: '', 
				                    length_unit: '', 

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