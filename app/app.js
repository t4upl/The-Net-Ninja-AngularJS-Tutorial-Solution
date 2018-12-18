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
