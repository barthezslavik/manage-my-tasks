app = angular.module('application.controllers',[])

app.controller('ProjectListController',function($scope,$state,popupService,$window,Project){
    $scope.projects=Project.query();
    $scope.deleteProject=function(project){
        if(popupService.showPopup('Are you sure?')){
            project.$delete(function(){
                $window.location.href='';
            });
        }
    }
})

app.controller('ProjectViewController',function($scope,$stateParams,Project,Task){
    $scope.project=Project.get({id:$stateParams.id});
    $scope.tasks=Task.query({project_id:$stateParams.id});
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
