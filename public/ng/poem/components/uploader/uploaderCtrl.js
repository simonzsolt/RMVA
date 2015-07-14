angular
	.module('versApp')


// -----------------------------UPLOAD CONTROLLER-----------------------------


		// create new vers
		.controller('uploaderCtrl', [
			'$scope', 
			'poemFactory', 
			'$location',
		    
		    function($scope, poemFactory, $location){

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


		// _____________________________CREATE NEW VERS_____________________________


		        $scope.postVers = function() {

		            $scope.post_conf = confirm('Biztosan fel akarja tölteni a ezt a verset?');

		            if( $scope.post_conf === true ) {

			            poemFactory.save($scope.vers, function($location){
			                $scope.data = poemFactory.query();

			                 $scope.vers = 
			                {
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
			        }
			        else {
			            alert('Mégsem!');
			        }

		        }; // $scope.postVers
		}]); // uploadCtrl