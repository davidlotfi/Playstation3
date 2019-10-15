
 var myApp=angular.module('myApp',[
   'ngRoute',
   'Default'
 ]);

 myApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when('/list', {
     templateUrl: 'partition/list.html',
     controller: 'ListController'
   }).
   when('/game',{
     templateUrl: 'partition/game.html',
     controller: 'GameController'
   }).
   when('/galerie',{
     templateUrl: 'partition/galerie.html',
     controller: 'GalerieController'
   }).
otherwise({
  redirectTo:'/list'
});
}]);
