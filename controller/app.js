
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
   when('/vgame',{
     templateUrl: 'partition/vgame.html',
     controller: 'VgameController'
   }).
   when('/audio',{
     templateUrl:'partition/audio.html',
     controller:'AudioController'
   }).
   when('/youtube',{
      templateUrl:'partition/youtube.html',
      controller:'YoutubeController'
   }).
   when('/store',{
     templateUrl:'partition/store.html',
     controller:'StoreController'
   }).
otherwise({
  redirectTo:'/list'
});
}]);
