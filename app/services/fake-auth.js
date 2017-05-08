(function () {
    'use strict';

    angular
        .module('app')
        .run(fakeAuth);

    function fakeAuth($httpBackend) {
        var user =
            { 
                username: 'cristi.teclici', 
                password: '123456', 
                firstName: 'Teclici', 
                lastName: 'Cristian-Ionut' 
            };

        $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data) {
            var params = angular.fromJson(data);

            if (params.username === user.username && params.password === user.password) {
                return [200, { 
                    token: 'fake-jwt-token', 
                    firstName: user.firstName, 
                    lastName: user.lastName 
                }, {}];
            } else {
                return [200, {}, {}];
            }
        });

        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }
})();