app = angular.module('application.taskControllers',[])

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
