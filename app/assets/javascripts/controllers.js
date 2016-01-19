app = angular.module('application.controllers',[])

app.controller('ProjectViewController',function($rootScope,popupService,$scope,$window,$stateParams,Project,Task){
    $scope.project=Project.get({id:$stateParams.id});
    $scope.tasks=Task.query({project_id:$stateParams.id});
    $rootScope.project_id = $stateParams.id;
    $scope.priorities = $rootScope.priorities;
    //$filter('filter')($rootScope.priorities, {id: 1})[0];

    $scope.deleteTask=function(task){
      if(popupService.showPopup('Are you sure?')){
          task.$delete(function(){
              $window.location.href='';
          });
      }
    }
    $scope.toggleTask=function(task){
      task.$update(function() {});
    }
})

app.controller('ProjectListController',
  function($scope,$state,popupService,$window,Project,Auth){

    Auth.currentUser().then(function(user) {
      console.log(user);
      }, function(error) {
    });
    
    $scope.projects=Project.query();
    $scope.deleteProject=function(project){
        if(popupService.showPopup('Are you sure?')){
            project.$delete(function(){
                $window.location.href='';
            });
        }
    }
})

app.controller('ProjectCreateController',function($scope,$state,$stateParams,Project){
    $scope.project=new Project();
    $scope.addProject=function(){
        $scope.project.$save(function(){
          $state.go('projects');
        });
    }
})

app.controller('ProjectEditController',function($scope,$state,$stateParams,Project){
    $scope.updateProject=function(){
        $scope.project.$update(function(){
            $state.go('projects');
        });
    };
    $scope.loadProject=function(){
        $scope.project=Project.get({id:$stateParams.id});
    };
    $scope.loadProject();
});


app.controller('TaskCreateController',function($location,$rootScope,$scope,$state,$stateParams,Task,Project){
    $scope.task=new Task();
    $scope.task.project_id = $rootScope.project_id;

    $scope.addTask=function(){
        $scope.task.$save(function(){
          $location.path('projects/'+$rootScope.project_id+'/view')
        });
    }
})

app.controller('TaskEditController',function($location,$scope,$state,$stateParams,Task){
    $scope.updateTask=function(){
        $scope.task.$update(function(){
          $location.path('projects/'+$scope.task.project_id+'/view')
        });
    };
    $scope.loadTask=function(){
        $scope.task=Task.get({id:$stateParams.id});
    };
    $scope.loadTask();
});
