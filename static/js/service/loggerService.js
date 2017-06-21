(function(){
 'use strict';
 angular.module('loggerServiceApp',[])
  .service('loggerSvc',loggerSvc);

//angular中service 用到DI思想,采用单例模式，一次生成，全局使用。
//this来操作数据、定义函数。
  function loggerSvc(){
      this.writeLog=function(msg){
          console.info(msg);
          //alert(msg+"来自serservice")
      }
  };
})();