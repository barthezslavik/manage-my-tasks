var app = angular.module('application',["ngRoute"]);

angular
    .module('application', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
        $locationProvider.html5Mode(true);
    });

//app.config(function($routeProvider, $locationProvider) {
//  $locationProvider.html5Mode(true);
//  $routeProvider
//    .when("/angular",
//      { templateUrl: "<%= asset_path('angular/index.html') %> ",
//        controller: "ContactsIndexCtrl" })
//    .when("/angular/new",
//      { templateUrl: "<%= asset_path('angular/edit.html') %> ",
//        controller: "ContactsEditCtrl" })
//    .when("/angular/:id",
//      { templateUrl: "<%= asset_path('angular/show.html') %> ",
//        controller: "ContactsShowCtrl" })
//    .when("/angular/:id/edit",
//      { templateUrl: "<%= asset_path('angular/edit.html') %> ",
//        controller: "ContactsEditCtrl" })
//    .otherwise({ redirectTo: "/angular" });
//});

//app.controller('ProjectIndexController', ['$scope', '$http', function($scope, $http) {
//  $http.get('http://localhost:3000/projects.json').
//   success(function(data) {
//      $scope.projects = data;
//  });
//  $scope.showModal = false;
//  $scope.toggleModal = function(){
//    $scope.showModal = !$scope.showModal;
//  };
//}]);

//app.controller('ProjectShowController', ['$scope', '$http', function($scope, $http) {
//  project_id = location.hash.split("/").pop();
//  $http.get('http://localhost:3000/projects/'+project_id+'.json').
//    success(function(data) {
//      $scope.project = data;
//  });
//}]);


