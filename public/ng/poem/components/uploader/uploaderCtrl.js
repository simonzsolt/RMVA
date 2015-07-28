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


		        // var Arr = [];
		        
		        // $scope.selectCompMenu = function(){

		        // 	angular.forEach($scope.x ,function(value, index){
		        // 		console.log('$scope.x value: ' + value + ' $scope.x index: ' + index);
		        // 		Arr.push({index : value});
		        // 	});

		        // 	// $scope.vers.metrum = '';

		        // 	angular.forEach(Arr ,function(value, index){
		        // 		// console.log('valueArr : ' + value + ' indexArr : ' + index);
		        // 		angular.forEach(value ,function(v, i){
		        // 			console.log('v: ' + v + ' index: ' + index);
		        // 		});
		        // 	});
		        // };


		        $scope.vers.metrum = [{}];

		        $scope.addField = function addField () {
					$scope.vers.metrum.push({});
				}

				$scope.removeField = function removeField () {
					var lastItem = $scope.metrum.length -1; 
					$scope.metrum.splice(lastItem);
				}




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