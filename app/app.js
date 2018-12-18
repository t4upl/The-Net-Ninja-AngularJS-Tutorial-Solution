var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl:'views\\home.html'
    })
    .when('/directory', {
      templateUrl:'views\\directory.html',
      controller: 'myNinjaController'
    })
    .otherwise({
      redirectTo: '/home'
    })
}]);

myNinjaApp.controller('myNinjaController', ['$scope', function($scope){
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

  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      available: true,
      thumb: "content\\img\\yoshi.png"
    },
    {
      name: "Crytstal",
      belt: "green",
      rate: 30,
      available: true,
      thumb: "content\\img\\crystal.png"
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10,
      available: true,
      thumb: "content\\img\\crystal.png"
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 51000,
      available: true,
      thumb: "content\\img\\crystal.png"
    }
  ];
}]);

myNinjaApp.config(function (){

});

myNinjaApp.run(function(){

});

// myNinjaApp.controller
