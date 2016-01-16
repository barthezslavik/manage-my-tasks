var app = angular.module('application',["ngRoute"]);

//app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//  var partialsUrl = '/partials/';
//  $routeProvider
//    .when('/', {templateUrl: 'projects', controller: 'ProjectCtrl'})
//    .when('/tasks', {templateUrl: 'tasks', controller: 'TasksCtrl'})
//    .otherwise({redirectTo: '/'});
//}]);

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

app.controller('ProjectIndexController', ['$scope', '$http', function($scope, $http) {
//  $http.get('http://localhost:3000/projects.json').
//    success(function(data) {
//      $scope.projects = data;
//  });
}]);

app.controller('ProjectShowController', ['$scope', '$http', function($scope, $http) {
  project_id = location.hash.split("/").pop();
  $http.get('http://localhost:3000/projects/'+project_id+'.json').
    success(function(data) {
      $scope.project = data;
  });
}]);

app.controller('MainCtrl', function ($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
  });

app.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
