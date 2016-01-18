app = angular.module('application.services',[]).factory('Project',function($resource){
  return $resource('/api/projects/:id',{id:'@_id'},{
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
