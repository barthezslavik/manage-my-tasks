app = angular.module('application.deviseControllers',[])

app.controller('SignInController',function($scope,Auth){
  $scope.signIn=function(){
    var credentials = {
      email: $scope.email,
      password: $scope.password,
    };
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    Auth.login(credentials, config).then(function(user) {
      console.log(user); // => {id: 1, ect: '...'}
    }, function(error) {
      $scope.error = error.data.error;
      // Authentication failed...
    });
  }
})


