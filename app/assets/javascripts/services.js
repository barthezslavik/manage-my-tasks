app = angular.module('application.services',[]).factory('Movie',function($resource){
  return $resource('/api/movies/:id',{id:'@_id'},{
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
