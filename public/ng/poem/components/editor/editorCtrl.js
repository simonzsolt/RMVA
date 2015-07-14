angular
	.module('versApp')


// -----------------------------EDITOR CONTROLLER-----------------------------


		.controller('editorCtrl', [
			'$scope', 
			'$routeParams', 
			'poemFactory', 
			'$location',

		    function($scope, $routeParams, poemFactory, $location) {
		        $scope.versId = $routeParams.versId;
		        $scope.vers = poemFactory.get({id: $routeParams.versId});
		        $scope.data = poemFactory.query();  


// _____________________________EDIT VERS_____________________________


		    $scope.editVers = function() {

		        $scope.edit_conf = confirm('Biztosan módosítani akarja a verset?');

		        if($scope.edit_conf === true) {

		            poemFactory.update($scope.vers, function($location){           
		            }); // poemFactory.update

		        // for list to reload this needs to be here
		        $scope.data = poemFactory.query();

		        $location.path( "/list" );
		        alert('Sikeres feltöltés!');

		        };     
		    }; //editVers
		}]); //editCtrl
