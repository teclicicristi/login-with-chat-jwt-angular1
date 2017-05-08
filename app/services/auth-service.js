(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthService', AuthService);

    function AuthService($http, $localStorage) {
        var service = {};
        service.Login = Login;
        service.Logout = Logout;
        return service;

        function Login(username, password, callback) {
            $http.post('/api/authenticate', { username: username, password: password })
                .success(function (response) {
                    if (response.token) {
                        $localStorage.currentUser = { 
                            username: username, 
                            token: response.token,
                            firstName: response.firstName,
                            lastName: response.lastName 
                        };
                        // $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
        }

        function Logout() {
            delete $localStorage.currentUser;
            // $http.defaults.headers.common.Authorization = '';
        }
    }
})();