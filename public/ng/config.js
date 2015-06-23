angular

    .module('versApp')

// =============================CONFIG=============================

        .config(function($routeProvider) {
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

                .otherwise({
                    redirectTo: '/list'
                });
                
        }); // config