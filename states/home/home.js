(function () {
    'use strict';

    angular
        .module('propheticcreations')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            });
    }
})();
