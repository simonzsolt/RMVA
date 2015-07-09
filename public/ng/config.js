angular

    .module('versApp')

// =============================CONFIG=============================

        .config(function($routeProvider, $locationProvider, $httpProvider) {


            var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user){
                // Authenticated
                if (user !== '0')
                    /*$timeout(deferred.resolve, 0);*/
                    deferred.resolve();

                // Not Authenticated
                else {
                    $rootScope.message = 'You need to log in.';
                    //$timeout(function(){deferred.reject();}, 0);
                    deferred.reject();
                    $location.url('/login');
                }
            });

            return deferred.promise;
            };
            //================================================
            
            //================================================
            // Add an interceptor for AJAX errors
            //================================================
            $httpProvider.interceptors.push(function($q, $location) {
                return {
                    response: function(response) {
                    // do something on success
                    return response;
                },
                    responseError: function(response) {
                        if (response.status === 401)
                            $location.url('/login');
                            return $q.reject(response);
                    }
                };
            });


            $routeProvider

                .when('/list', {
                    templateUrl: 'ng/components/listing/listView.html',
                    controller: 'listingCtrl'
                })

                .when('/view/id/:versId', {
                    templateUrl: 'ng/components/viewer/readView.html',
                    controller: 'viewerCtrl'
                })
                
                .when('/upload', {
                    templateUrl: 'ng/components/uploader/uploadView.html',
                    controller: 'uploaderCtrl'
                })   

                .when('/edit/id/:versId', {
                    templateUrl: 'ng/components/editor/editorView.html',
                    controller: 'editorCtrl'
                })
                
                .when('/signup', {
                    templateUrl: 'ng/components/signup/signupView.html',
                    controller: 'signupCtrl'
                })

                .otherwise({
                    redirectTo: '/list'
                });
                
        }); // config