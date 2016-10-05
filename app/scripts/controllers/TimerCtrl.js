(function() {
    function TimerCtrl(){
        this.clock = "25:00";
    }
    
    angular
        .module('blocTime')
        .controller('TimerCtrl', TimerCtrl);
})();