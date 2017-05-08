(function () {
    'use strict';

    myApp
        .controller('loginCtrl', loginCtrl);

    function loginCtrl($location, AuthService) {
        var vm = this;

        vm.login = login;

        initController();

        function initController() {
            AuthService.Logout();
        };

        function login() {
            vm.loading = true;
            AuthService.Login(vm.username, vm.password, function (result) {
                if (result === true) {
                    $location.path('/chat');
                } else {
                    vm.error = 'Username or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }

})();