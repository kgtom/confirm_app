(function () {
    angular.module('confirmFactoryApp', [])
        .factory('confirmFactory', confirmFactory);

    
    function confirmFactory() {
        var factory = {}
        factory.myFac = function (msg) {
            // console.info(msg);
            alert(msg + "from confirmFactory")
        };
        return factory;
    }
})();