var application = angular.module('application',[]);

application.controller('ProjectController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
