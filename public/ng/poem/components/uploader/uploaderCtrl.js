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


		// _____________________________CREATE NEW VERS_____________________________

		        $scope.postVers = function() {

		        	if ($rootScope.loggedInUser.role !== 'user') {

		        	/*	if($scope.vers.date.single){
		        			console.log('$scope.vers.date.single: ' + $scope.vers.date.single);
		        		}

		        		console.log('$scope.vers.date.single.exact_date: ' + 
		        			$scope.vers.date.single.exact_date);
		        		
*/
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