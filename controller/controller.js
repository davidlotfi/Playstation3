

var Default  = angular.module('Default',['ngAnimate']);
Default.controller('ListController',['$scope','$http', function($scope,$http){

  $scope.hoverIn = function(){
         this.hoverEdit = true;
     };

  $scope.hoverOut = function(){
         this.hoverEdit = false;
     };

}]);
