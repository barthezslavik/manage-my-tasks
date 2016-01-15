var app = angular.module('application',[])
  .controller('ProjectController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/projects.json').
    success(function(data) {
      $scope.projects = data;
  });
}]);
