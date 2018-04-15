(function () {
    angular.module('country', ['utils', 'ngStorage', 'ui.materialize'])
        .controller('country', function ($scope, $location, $localStorage) {
            var self = this;
            
            self.title = "Some Page";
        });
})();