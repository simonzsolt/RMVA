angular
    .module('versApp')

// =============================CONFIG=============================

// -----------------------------LOGGEDIN CONFIG-----------------------------

        .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {


            var checkLoggedin = function($q, $timeout, $http, $location){
                // Initialize a new promise
                var deferred = $q.defer();

                // Make an AJAX call to check if the user is logged in
                $http.get('/loggedin').success(function(user){
                    // Authenticated
                    if (user !== '0') {
                        deferred.resolve();
                    }

                    // Not Authenticated
                    else {
                        deferred.reject();
                        $location.url('/unauth');
                    }
                });

                return deferred.promise;
            };
            checkLoggedin.$inject = ['$q', '$timeout', '$http', '$location'];
            
            //================================================
            // Add an interceptor for AJAX errors
            //================================================
            $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
                return {
                    response: function(response) {
                        // do something on success
                        return response;
                    },

                    responseError: function(response) {
                        if (response.status === 401)
                            $location.url('/unauth');
                            return $q.reject(response);
                    }
                };
            }]);


// -----------------------------ROUTES CONFIG FOR POEMS-----------------------------

            $routeProvider

                .when('/list', {
                    templateUrl: 'ng/poem/components/listing/listView.html',
                    controller: 'listingCtrl',
                })

                .when('/view/id/:versId', {
                    templateUrl: 'ng/poem/components/viewer/readView.html',
                    controller: 'viewerCtrl'
                })
                
                .when('/upload', {
                    templateUrl: 'ng/poem/components/uploader/uploadView.html',
                    controller: 'uploaderCtrl',
                    resolve: { 
                        loggedin: checkLoggedin 
                    } 
                })   

                .when('/edit/id/:versId', {
                    templateUrl: 'ng/poem/components/editor/editorView.html',
                    controller: 'editorCtrl',
                    resolve: { 
                        loggedin: checkLoggedin 
                    } 
                });
                
        }]); // config