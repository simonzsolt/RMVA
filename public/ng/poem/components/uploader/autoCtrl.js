angular.module('versApp')

.controller('autoCtrl', autoCtrl);
    function autoCtrl ($timeout, $q, $log, geoFactory, $http) {

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

            var dump = geoFactory.query();

            angular.forEach(dump ,function(value, index){
                 console.log(value.names);
             }); 

            function loadAll(geo) {
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

    } 