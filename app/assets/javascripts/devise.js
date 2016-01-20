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
      console.log(user);
    }, function(error) {
      $scope.error = error.data.error;
    });
  }
})

app.controller('SignUpController',function($scope,Auth){
  $scope.signUp=function(){
    var credentials = {
      email: $scope.email,
      password: $scope.password,
      password_confirmation: $scope.password_confirmation,
    };
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    Auth.register(credentials, config).then(function(user) {
      console.log(user);
    }, function(error) {
      $scope.error = error.data.error;
    });
  }
})


