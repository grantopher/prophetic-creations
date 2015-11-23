(function () {
    'use strict';

    angular
        .module('propheticcreations')
        .controller('NavigationCtrl', NavigationCtrl);

    NavigationCtrl.$inject = [];

    function NavigationCtrl() {
        var vm = this;

        vm.nav_bar_items = ['one', 'two', 'three'];

        // stuff goes here
    }

})();
