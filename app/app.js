var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('myNinjaController', ['$scope', function($scope){
  $scope.message = "Hello from controller";
  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50
    },
    {
      name: "Crytstal",
      belt: "green",
      rate: 30

    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 51000
    }
  ];
}]);

myNinjaApp.config(function (){

});

myNinjaApp.run(function(){

});

// myNinjaApp.controller
