(function () {
    'use strict';

    angular
        .module('propheticcreations')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$http']; // minification friendly injection

    function HomeCtrl($http) {
        var vm = this;

        $http.post('http://localhost:3000/user', {
            data: {
                display_name: 'test_user',
                first_name: 'test',
                last_name: 'user',
                dob: '1/1/1994'
            }
        }).then(function (response) {
            console.log(response);
        });

        // time to do do something;
    }
})();
