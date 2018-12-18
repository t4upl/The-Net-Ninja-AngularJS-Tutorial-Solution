var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('myNinjaController', ['$scope', function($scope){
  $scope.message = "Hello from controller";

  $scope.removeNinja = function(ninja) {
    var removedNinja  = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  }

  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      available: true
    },
    {
      name: "Crytstal",
      belt: "green",
      rate: 30,
      available: true

    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10,
      available: true
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 51000,
      available: true
    }
  ];
}]);

myNinjaApp.config(function (){

});

myNinjaApp.run(function(){

});

// myNinjaApp.controller
