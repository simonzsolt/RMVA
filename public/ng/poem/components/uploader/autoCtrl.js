angular.module('versApp')

.controller('autoCtrl', autoCtrl);
    function autoCtrl ($timeout, $q, $log, geoFactory, $http) {
/*
        var geoData = geoFactory.query(function(){

            var geoArr = [];

            angular.forEach(geoData ,function(geo, index){
                geoArr.push({
                    'name': geo.name,
                    'id': geo._id
                })
            });
*/
     /*   $http.get('/geo').then(function(data){
            console.log(data);
        });*/
/*
        var geoData = geoFactory.query(function(data){
            console.log(data);
        });*/

                    var mock = [
                                    {
                                        'name'      : 'fasz',
                                        'id': '3'
                                    },
                                    {
                                        'name'      : 'pina',
                                        'id': '4'
                                    }
                                ]

            var self = this;
            self.simulateQuery = false;
            self.isDisabled    = false;
            self.geo         = loadAll();
            self.querySearch   = querySearch;
            self.selectedItemChange = selectedItemChange;
            self.searchTextChange   = searchTextChange;
            // ******************************
            // Internal methods
            // ******************************
            /**
             * Search for geo... use $timeout to simulate
             * remote dataservice call.
             */
            function querySearch (query) {
              var results = query ? self.geo.filter( createFilterFor(query) ) : self.geo,
                  deferred;
              if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
              } else {
                return results;
              }
            }
            function searchTextChange(text) {
              $log.info('Text changed to ' + text);
            }
            function selectedItemChange(item) {
              $log.info('Item changed to ' + JSON.stringify(item));
            }
            /**
             * Build `components` list of key/value pairs
             */
/*

            function loadAll() {
                console.log('loadAll');
                $http.get('/geo').then(function(obj){
                    console.log(obj.data);
                    geo = obj.data
                    console.log('$http');
                    return geo.map( function (repo) {
                        console.log('data.map');
                        repo.value = repo.name.toLowerCase();
                        return repo;
                    });
                });
            }
*/              


            function loadAll(geo) {

                console.log(geo);
                return geo.map( function (repo) {
                    repo.value = repo.name.toLowerCase();
                    return repo;
                });
            }

            /**
             * Create filter function for a query string
             */
            function createFilterFor(query) {
              var lowercaseQuery = angular.lowercase(query);
              return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) === 0);
              };
            }

       /* });*/
    } 