(function() {
    function TimerCtrl($scope){
        this.timelimit = 1500;
        $scope.buttonText = "Start"
    }
    
    angular
        .module('blocTime')
        .controller('TimerCtrl', TimerCtrl);
})();