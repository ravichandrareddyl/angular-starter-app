(function () {
    angular.module('progress', ['utils', 'ngAnimate', 'dashBoard.services'])
        .controller('progress', function ($scope, $http, statsService) {
            var self = this;
            self.title = 'SOME PROGRESS PAGE';

            function activate() {
            
            }

            activate();
        })
})();