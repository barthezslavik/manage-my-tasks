app = angular.module('application.projectFactory',[]).factory('Project',function($resource){
  return $resource('/api/projects/:id',{id:'@id'},{
    update: {
      method: 'PUT'
    }
  });
})

app.service('popupService',function($window){
  this.showPopup=function(message){
    return $window.confirm(message);
  }
});

app = angular.module('application.taskFactory',[]).factory('Task',function($resource){
  return $resource('/api/tasks/:id',{id:'@id'},{
    update: {
      method: 'PUT'
    }
  });
})

app.service('popupService',function($window){
  this.showPopup=function(message){
    return $window.confirm(message);
  }
});
