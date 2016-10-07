(function(){
    function pomoCountdown() {
        return {
            templateUrl: '/templates/directives/clock.html',
            restrict: 'E',
            scope: { }, 
            link: function(scope, element, attributes) {
                scope.timelimit = 1500;
                scope.buttonText = "Start";
             
                // Starts timer button
                scope.toggleTimer = function() {
                    scope.timerInterval = $interval(function(){
                    scope.timelimit--;
                    }, 1000);
                };
            }
        }
        
        angular
            .module('blocTime')
            .directive('pomoCountdown', ['$document', pomoCountdown]);
    }
})();