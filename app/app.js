var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('myNinjaController', ['$scope', function($scope){
  $scope.message = "Hello from controller";
  $scope.ninjas = ['yoshi', 'ryu'];
}]);

myNinjaApp.config(function (){

});

myNinjaApp.run(function(){

});

// myNinjaApp.controller
