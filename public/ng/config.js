angular
    .module('versApp')

// =============================CONFIG=============================

// -----------------------------ROUTES CONFIG FOR POEMS-----------------------------

		.config(function($routeProvider, $locationProvider) {

            $routeProvider
                
                .otherwise({
                    redirectTo: '/list'
                });
                
        }); // config