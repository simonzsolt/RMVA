angular
    .module('versApp')

// =============================CONFIG=============================

// -----------------------------LOGGEDIN CONFIG-----------------------------

		.config(function($routeProvider, $locationProvider, $httpProvider) {


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
                        $location.url('/login');
                    }
                });

                return deferred.promise;
            };
            
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


// -----------------------------ROUTES CONFIG FOR AUTHENTICATION-----------------------------


             $routeProvider

                .when('/signup', {
                    templateUrl: 'ang/uth/components/signup/signupView.html',
                    controller: 'signupCtrl'
                }) 

                .when('/login', {
                    templateUrl: 'ng/auth/components/login/loginView.html',
                    controller: 'loginCtrl'
                })

                .when('/admin', {
                    templateUrl: 'ng/auth/components/admin/adminView.html',
                    controller: 'adminCtrl',
                    resolve: { 
                        loggedin: checkLoggedin 
                    } 
                })

                .when('/users', {
                    templateUrl: 'ng/auth/components/users/usersView.html',
                    controller: 'usersCtrl',
                    resolve: { 
                        loggedin: checkLoggedin 
                    } 
                })

                .otherwise({
                    redirectTo: '/list'
                });
                
        }); // config