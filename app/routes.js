myApp
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('chat', {
                url: '/',
                templateUrl: 'views/chat.html',
                controller: 'chatCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            });
	}]);