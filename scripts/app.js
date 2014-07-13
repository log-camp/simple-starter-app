var app = angular.module('simpleStarterApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('start', {
      url: '/start', 
      templateUrl: 'partials/start.html',
      controller: 'StartController'
    })
    .state('signup', {
      url: '/signup',;
      templateUrl: 'partials/signup/signup.html',
      controller: 'SignupController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    })
    .otherwise({
      redirectTo:    '/'
    });
});