angular.module('versApp').controller('DemoCtrl', function($scope) {

  
  $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];
  
  $scope.multipleDemo = {};
  $scope.multipleDemo.colors = ['Blue','Red'];

});