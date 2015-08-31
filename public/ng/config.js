angular
	.module('versApp')

// =============================CONFIG=============================

// -----------------------------ROUTES CONFIG FOR POEMS-----------------------------

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

            $routeProvider
                
                .otherwise({
                    redirectTo: '/list'
                });
                
        }]); // config