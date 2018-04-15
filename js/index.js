angular
  .module('hello', ['ngRoute', 'toaster', 'home', 'progress'])
  .config(

    function ($routeProvider, $httpProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider.when('/', {
        templateUrl: 'js/home/home.html',
        controller: 'home',
        controllerAs: 'vm'
      }).when('/progress', {
        templateUrl: 'js/progress/progress.html',
        controller: 'progress',
        controllerAs: 'vm'
      }).otherwise('/');
      $httpProvider.interceptors.push( function($q) {
        return {
          // optional method
          'request': function(config) {
            angular.element('body').removeClass('loaded');
            return config;
          },  
          // optional method
          'response': function(response) {
            // do something on success
            angular.element('body').addClass('loaded');
            return response;
          }
        };
      });
      $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    })
  