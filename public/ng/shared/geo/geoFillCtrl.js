angular.module('versApp')
 
.controller('geoFillCtrl', geoFillCtrl);
  
    function geoFillCtrl ($timeout, $q, $log, geoFactory) {
 
    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
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
     * Build `states` list of key/value pairs
     */

      var geoQuery = function() {
            geoFactory.get({name: 'example_city'})
                .then(function(data){
                    $log.info('promise on success: ' + data);

                    geoArr = []
                    angular.forEach(data ,function(value, index){
                        geoArr.push({
                            'name': value.name,
                            'id': value.geonameID
                        })
                    });

                }, function(err){
                    console.log('err ' + err);
                });
        };


    function loadAll() {
      return geoArr.map( function (geoName) {
        return {
          value: geoName.toLowerCase(),
          display: geoName
        };
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(geoName) {
        return (geoName.value.indexOf(lowercaseQuery) === 0);
      };
    }
  }



 
 
 /*
            var geoQuery = function() {
                geoFactory.getGeoNames()
                    .then(function(data){
                        $log.info('promise on success: ' + data);
                        // $rootScope.geo = data;
                    }, function(err){
                        console.log('err ' + err);
                    });
            };
 
 */
 /*
            function loadAll() {
 
                    // return $rootScope.geo.map( function (repo) {
                    return mock.map( function (repo) {
                        return {
                            value: repo.toLowerCase(),
                            display: name 
                        }
                        $log.info(mock)
                    });
            }
 */
            /**
             * Create filter function for a query string
             */

 /*           function createFilterFor(query) {
              var lowercaseQuery = angular.lowercase(query);
              return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) === 0);
              };
            }
        }
*/
 
    