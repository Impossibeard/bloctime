(function() {
    function TimerCtrl(){
        this.clock = 1500;
    }
    
    angular
        .module('blocTime')
        .controller('TimerCtrl', TimerCtrl);
})();