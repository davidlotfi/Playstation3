

var Default  = angular.module('Default',['ngAnimate']);
Default.controller('ListController',['$scope','$http', function($scope,$http){

  $scope.hoverIn = function(){
         this.hoverEdit = true;
     };

  $scope.hoverOut = function(){
         this.hoverEdit = false;
     };
}]);

Default.controller('GameController',['$scope','$http', function($scope,$http){
}]);
Default.controller('GalerieController',['$scope','$http', function($scope,$http){
}]);
Default.controller('VgameController',['$scope','$http', function($scope,$http){
}]);
Default.controller('AudioController',['$scope','$http', function($scope,$http){
}]);
Default.controller('YoutubeController',['$scope','$http', function($scope,$http){
}]);
Default.controller('StoreController',['$scope','$http', function($scope,$http){
}]);


// controller de la bar de recherche represente comme une partition commun

Default.controller('RCtrl',['$scope','$http', function($scope,$http){
   $scope.recherche = {name: "partition/recherche.html", url: "partition/recherche.html"};
}]);
