///确认单service,业务逻辑模块

(function () {
    'use strict';
    angular.module('confirmServiceApp', [])
        .service('confirmService', confirmService);
    confirmService.$inject = ['$http','$sce'];    
    function confirmService($http,$sce) {     
        //get confirminfo
        this.getData = function (id) {
            var url = "/showConfirm/info/"+id         
            var resp = $http.get(url);  
            return resp;
        };

       //confirm 
       this.doConfirm=function(id){
           var url = "/confirm/"+id         
            var resp = $http.get(url);  
            return resp;
       }
       //cancel
       this.doCancel=function(id){
           var url="/cancel/"+id
           var resp=$http.get(url)
           return resp;
       }
        
    }
})();