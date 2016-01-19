app = angular.module('application',['ui.router','ngResource','Devise',
  'application.controllers','application.project','application.task']);

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
    }).state('newTask',{
        url:'/tasks/new',
        templateUrl:'partials/task-add.html',
        controller:'TaskCreateController'
    }).state('editProject',{
        url:'/projects/:id/edit',
        templateUrl:'partials/project-edit.html',
        controller:'ProjectEditController'
    }).state('editTask',{
        url:'/tasks/:id/edit',
        templateUrl:'partials/task-edit.html',
        controller:'TaskEditController'
    });
}).run(function($state,$rootScope){
   $state.go('projects');
   $rootScope.priorities = [
     { id: 'High', name: 'High' },
     { id: 'Normal', name: 'Normal' },
     { id: 'Low', name: 'Low' }
   ];
});

    
