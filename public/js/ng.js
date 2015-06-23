var app = angular.module('versApp', ['ngRoute', 'ngResource'])

// =============================CONFIG=============================

.config(function($routeProvider) {
    $routeProvider

        .when('/list', {
            templateUrl: 'ng/components/listing/listView.html',
            controller: 'mainCtrl'
        })

        .when('/view/id/:versId', {
            templateUrl: 'ng/components/viewer/readView.html',
            controller: 'viewCtrl'
        })
        
        .when('/upload', {
            templateUrl: 'ng/components/uploader/uploadView.html',
            controller: 'uploadCtrl'
        })   

        .when('/edit/id/:versId', {
            templateUrl: 'ng/components/editor/editorView.html',
            controller: 'editCtrl'
        })

        .otherwise({
            redirectTo: '/list'
        });
        
}) // config


// =============================FACTORY=============================


// service for listing, uploading and editing
.factory('versFactory', function($resource){
    // var instead of return
    return $resource('/data/:id', {id: '@_id'}, {
        'update' : {method: 'PUT'}

    }) //return $resource
}) // versFactory


// =============================CONTROLLERS=============================

// -----------------------------MAIN CONTROLLER-----------------------------

.controller('mainCtrl', ['$scope', '$routeParams', 'versFactory', '$location', 
    function($scope, $routeParams, versFactory, $location){

        $scope.data = versFactory.query();
        $scope.versId = $routeParams.versId;
        $scope.list_menu = true; // for the "List" menu "ng-hide" attr

        // $scope.hideListBtn = $location.path() === '/list';

        $scope.predicate = '-created_at';

        // deleting items by _id
        $scope.deleteVers = function(vers_id){
            $scope.del_conf = confirm('Biztosan törölni szeretné a verset?');
            if ($scope.del_conf === true) {
                versFactory.delete({id: vers_id}, function(){
                    alert('A vers törölve!');
                });
                $scope.data = versFactory.query();
            };
        }; //$scope.deleteVers
}])

// -----------------------------NAVIGATION CONTROLLER-----------------------------

.controller('navCtrl', ['$scope', '$routeParams', 'versFactory', '$location', '$rootScope', '$route',
    function($scope, $routeParams, versFactory, $location, $rootScope, $route){ 
        $scope.path = $location.path();
    //
}])


// -----------------------------VIEW CONTROLLER-----------------------------


// view vers
.controller('viewCtrl', ['$scope', '$routeParams', 'versFactory', '$location',
    function($scope, $routeParams, versFactory, $location) {
        $scope.versId = $routeParams.versId;

        $scope.test = versFactory.get({id: '55688c8d013f6c1d1c26340e'});
        console.log('testscope: ' + $scope.test);  

        $scope.vers = versFactory.get({id: $routeParams.versId});
    }]) //viewCtrl


// -----------------------------EDIT CONTROLLER-----------------------------


// edit vers
.controller('editCtrl', ['$scope', '$routeParams', 'versFactory', '$location',
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
}]) //editCtrl


// -----------------------------UPLOAD CONTROLLER-----------------------------


// create new vers
.controller('uploadCtrl', ['$scope', 'versFactory', '$location',
    function($scope, versFactory, $location){

        

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


// _____________________________CREATE NEW VERS_____________________________


        $scope.postVers = function() {

            $scope.post_conf = confirm('Biztosan fel akarja tölteni a ezt a verset?');
            if( $scope.post_conf === true ) {

            versFactory.save($scope.vers, function($location){
                $scope.data = versFactory.query();

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
            }); // versFactory
            
            $location.path( "/list" );
            alert('Sikeres feltöltés!');
        }
        else {
            alert('Mégsem!');
        }

        }; // $scope.postVers
}]); // uploadCtrl