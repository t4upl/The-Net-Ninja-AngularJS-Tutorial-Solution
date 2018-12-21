var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.controller("ContactController", ['$scope', '$location', function($scope, $location){
  $scope.sendMessage = function(){
    $location.path('/contact-success');
  }
}]);

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

 $locationProvider.html5Mode(true);


  $routeProvider
    .when('/', {
      templateUrl:'views\\home.html',
      controller: 'myNinjaController'
    })
    .when('/contact', {
      templateUrl:'views\\contact.html',
      controller: 'ContactController'
    })
    .when('/contact-success', {
      templateUrl:'views\\contact-success.html',
      controller: 'ContactController'
    })
    .when('/directory', {
      templateUrl:'views\\directory.html',
      controller: 'myNinjaController'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);

myNinjaApp.directive('randomNinja', [function(){

  return {
    restrict: 'E',
    scope: {
      ninjas: '=',
      title: '='
    },
    templateUrl: 'views\\random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);

    }

  };
}]);


myNinjaApp.controller('myNinjaController', ['$scope', '$http', function($scope, $http){
  $scope.message = "Hello from controller";

  $scope.removeNinja = function(ninja) {
    var removedNinja  = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  }

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });

    $scope.newninja.name = '';
    $scope.newninja.belt = '';
    $scope.newninja.rate = '';
  }

  $scope.removeAll = function() {
    console.log("remove all");
    $scope.ninjas = [];
  };

  $http.get('data\\ninjas.json').then(
      function(response){
        $scope.ninjas = response.data;
      },
      function errorCallback(error){
        console.log(error);}
    );
}]);

myNinjaApp.config(function (){

});

myNinjaApp.run(function(){

});

// myNinjaApp.controller
