app = angular.module('application.projectControllers',[])

app.controller('ProjectViewController',function($rootScope,popupService,$scope,$window,$stateParams,Project,Task){
    $scope.project=Project.get({id:$stateParams.id});
    $scope.tasks=Task.query({project_id:$stateParams.id});
    $rootScope.project_id = $stateParams.id;

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
  function($rootScope,$scope,$state,popupService,$window,Project){
   
    $scope.projects=Project.query();
    $scope.deleteProject=function(project){
        if(popupService.showPopup('Are you sure?')){
            project.$delete(function(){
                delete($rootScope.project_id);
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
