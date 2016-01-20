app = angular.module('application.deviseControllers',[])

app.controller('SignInController',function($scope,$state,Auth){
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
      $state.go('projects');
    }, function(error) {
      $scope.signInForm = errors.data;
    });
  }
})

app.controller('SignUpController',function($scope,$state,Auth){
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
      $state.go('projects');
    }, function(errors) {
      $scope.signUpForm = errors.data;
    });
  }
})


