angular
	.module('versApp')


// -----------------------------EDITOR CONTROLLER-----------------------------


		.controller('editorCtrl', [
			'$scope', 
			'$routeParams', 
			'versFactory', 
			'$location',

		    function($scope, $routeParams, versFactory, $location) {
		        $scope.versId = $routeParams.versId;
		        $scope.vers = versFactory.get({id: $routeParams.versId});
		        $scope.data = versFactory.query();  


// _____________________________EDIT VERS_____________________________


		    $scope.editVers = function() {

		        $scope.edit_conf = confirm('Biztosan módosítani akarja a verset?');

		        if($scope.edit_conf === true) {

		            versFactory.update($scope.vers, function($location){           
		            }); // versFactory.update

		        // for list to reload this needs to be here
		        $scope.data = versFactory.query();

		        $location.path( "/list" );
		        alert('Sikeres feltöltés!');

		        };     
		    }; //editVers
		}]); //editCtrl
