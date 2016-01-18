app = angular.module('application',['ui.router','ngResource','application.controllers','application.project','application.task']);

app.config(function($stateProvider){
    $stateProvider.state('projects',{
        url:'/projects',
        templateUrl:'partials/projects.html',
        controller:'ProjectListController'
    }).state('viewProject',{
       url:'/projects/:id/view',
       templateUrl:'partials/project-view.html',
       controller:'ProjectViewController'
    }).state('newProject',{
        url:'/projects/new',
        templateUrl:'partials/project-add.html',
        controller:'ProjectCreateController'
    }).state('editProject',{
        url:'/projects/:id/edit',
        templateUrl:'partials/project-edit.html',
        controller:'ProjectEditController'
    });
}).run(function($state){
   $state.go('projects');
});
