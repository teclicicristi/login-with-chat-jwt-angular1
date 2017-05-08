(function () {
    'use strict';

    myApp
        .directive('scrollBottom', function () {
          return {
            scope: {
              scrollBottom: "="
            },
            link: function (scope, element) {
              scope.$watchCollection('scrollBottom', function (newValue) {
                if (newValue)
                {
                  $(element).scrollTop($(element)[0].scrollHeight);
                }
              });
            }
          }
        })
        .controller('chatCtrl', function chatCtrl($scope, $localStorage) {
            initController();
            function initController() {};

            $scope.name = $localStorage.currentUser.firstName + " " + $localStorage.currentUser.lastName;
            $scope.messages = [];
            $scope.im = {};
            $scope.sendIM = function(msg) {
                var audioSend = new Audio('assets/sounds/send-msg.mp3');
                audioSend.play();
                $scope.currentDate = new Date();
                $scope.messages.push(msg);
                $scope.im = {};
            }
        });

})();