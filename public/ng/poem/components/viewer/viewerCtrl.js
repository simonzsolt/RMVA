angular
    .module('versApp')

// -----------------------------VIEW CONTROLLER-----------------------------

        .controller('viewerCtrl', 
            
            function($scope, $routeParams, poemFactory, $location, $anchorScroll) {

                $scope.vers = poemFactory.get({id: $routeParams.versId}, function(){

                    if ($scope.vers.acro_int) {
                        $scope.acroInt = 'Integráns' }

                    else { $scope.acroInt = 'Nem integráns' }

// ==================================Date object==================================

                    var child = Object.getOwnPropertyNames($scope.vers.date);

                    $scope.child = child.toString();

                    switch (child.toString()) {

                        case 'single':

                            var grandChild = 
                                Object.getOwnPropertyNames($scope.vers.date[child]);

                            $scope.grandChild = grandChild.toString();

                                switch (grandChild.toString()) {

                                    case 'exact_date':
                                        $scope.dateObj = 
                                            $scope.vers.date[child][grandChild]
                                        break;

                                    case 'only_year':
                                        $scope.dateObj = 
                                            $scope.vers.date[child][grandChild].year
                                        break;

                                    case 'year_month':
                                        $scope.dateObj = {
                                            year: $scope.vers.date
                                                [child][grandChild].year,
                                            
                                            month: $scope.vers.date
                                                [child][grandChild].month 
                                        }; break;

                                    case 'only_cent':
                                        $scope.dateObj = 
                                            $scope.vers.date[child][grandChild].cent
                                        break;

                                    default:

                                }; break;

                        case 'period':

                            var grandChildFrom = 
                                Object.getOwnPropertyNames($scope.vers.date[child].from);

                            $scope.grandChildFrom = grandChildFrom.toString();

                            switch (grandChildFrom.toString()) {

                                case 'exact_date':
                                    $scope.dateObjFrom = 
                                        $scope.vers.date[child].from[grandChildFrom]
                                    break;

                                case 'only_year':
                                    $scope.dateObjFrom = 
                                        $scope.vers.date[child].from[grandChildFrom].year
                                    break;

                                case 'year_month':
                                    $scope.dateObjFrom = {
                                        year: $scope.vers.date
                                            [child].from[grandChildFrom].year,
                                        
                                        month: $scope.vers.date
                                            [child].from[grandChildFrom].month 
                                    }; break;

                                case 'only_cent':
                                    $scope.dateObjFrom = 
                                        $scope.vers.date[child].from[grandChildFrom].cent
                                    break;

                                default:
                                    console.log(
                                        grandChildFrom + ' could not be interpreted');
                            };

                            var grandChildTo = 
                                Object.getOwnPropertyNames($scope.vers.date[child].to);

                            $scope.grandChildTo = grandChildTo.toString();

                            switch (grandChildTo.toString()) {

                                case 'exact_date':
                                    $scope.dateObjTo = 
                                        $scope.vers.date[child].to[grandChildTo]
                                    break;

                                case 'only_year':
                                    $scope.grandChildTo = 
                                        $scope.vers.date[child].to[grandChildTo].year
                                    break;

                                case 'year_month':
                                    $scope.grandChildTo = {
                                        year: $scope.vers.date
                                            [child].to[grandChildTo].year,
                                        
                                        month: $scope.vers.date
                                            [child].to[grandChildTo].month 
                                    }; break;

                                case 'only_cent':
                                    $scope.grandChildTo = 
                                        $scope.vers.date[child].to[grandChildTo].cent
                                    break;

                                default:
                                    console.log(
                                        grandChildTo + ' could not be interpreted');
                            };

                            break;

                        default:
                            console.log(child + ' could not be interpreted');


                    };                       
                    
                    // achorscroll
                    $anchorScroll.yOffset = ($(window).height())/3;

                    $scope.H = $location.hash();

                    $scope.goToLine = function goToLine (lg, l) {

                        $location.hash(lg + '_' + l);

                        $anchorScroll();
                    };

                });     

            }) //viewCtrl
