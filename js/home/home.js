(function () {
  angular.module('home', ['utils', 'ngAnimate', 'ngStorage', 'dashBoard.services'])
  .controller('home', function($scope, $location, $localStorage, statsService) {
    var self = this;
    self.title = 'Home Page'
      
    function activate () {
    }
     
    activate();
    });
})();