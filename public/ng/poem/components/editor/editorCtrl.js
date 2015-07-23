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
		        $scope.vers = poemFactory.get({id: $routeParams.versId});
		        $scope.data = poemFactory.query(); 

		        // console.log('ready! + this data: ' + $scope.data.length);


// _____________________________EDIT VERS_____________________________


		    $scope.editVers = function() {

		    	$scope.vers.mod_by = $rootScope.loggedInUser.nickname;

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
