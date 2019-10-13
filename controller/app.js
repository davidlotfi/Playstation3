
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
otherwise({
  redirectTo:'/list'
});
}]);
