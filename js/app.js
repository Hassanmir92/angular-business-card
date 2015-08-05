var myApp = angular.module('myApp', []);

myApp.controller('BusinessCardController', function($scope){
  $scope.user = {
    name: 'Hassan',
    occupation: 'Coder',
    email: 'me@hassanmir.com',
    link1: 'www.Hassanmir.com',
    tusername: 'hassanmir92',
    companylogo: '',
    color1: '#287cc2',
    color2: '#666',
    fusername: '',
    gusername: ''
  }
});