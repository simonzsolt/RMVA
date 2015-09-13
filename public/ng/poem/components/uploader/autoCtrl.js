angular.module('versApp')

.controller('autoCtrl', autoCtrl);
    function autoCtrl ($timeout, $q, $log, geoFactory, $scope) {

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

             geoFactory.get({name: 'rád'}).then(function( result ){
                $scope.isLoaded = true;
                console.log(result);
                $scope.geoQuery = result;
             }, function(err){
                $scope.err = 'err: ' + err;
             });

/*

            var geoQuery = function() {
                geoFactory.getGeoNames()
                    .then(function(data){
                        console.log('promise on success: ' + data);
                    }, function(err){
                        console.log('err ' + err);
                    });
            };
*/
            console.log('dick');

            var geo = [{ name: 'fasz' }];

            function loadAll() {

                    return geo.map( function (repo) {
                        repo.value = repo.name.toLowerCase();
                        return repo;
                        // console.log(repo);
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

    } 