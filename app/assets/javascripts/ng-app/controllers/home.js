angular.module('application')
    .controller('HomeCtrl', function ($scope) {
        $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];
    });