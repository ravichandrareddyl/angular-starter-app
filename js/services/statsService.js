(function () {
    angular.module('dashBoard.services', ['ngStorage'])
        .factory('statsService', function ($http, $q, $localStorage) {
            var self = {};
            return self;
        });
})();