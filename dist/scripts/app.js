(function() {
    
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
                .state('timer', {
                    url: '/',
                    controller: 'TimerCtrl as timer',
                    templateUrl: '/templates/timer.html'
                });
    };
    
    angular
        .module('blocTime', ['ui.router', 'firebase'])
        .config(config);
})();