(function () {
    'use strict';
    angular
        .module('propheticcreations', [
            'ngMaterial',
            'ui.router',
        ])
        .config(config);

    config.$inject = ['$urlRouterProvider', '$locationProvider'];

    function config($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
    }

})();
