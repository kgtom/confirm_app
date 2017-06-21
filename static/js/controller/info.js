(function () {
  'use strict';
  angular.module('confirmApp', ['ngMaterial', 'loggerServiceApp', 'confirmFactoryApp', 'confirmServiceApp'])
    //.facotry('confirmFactory',confirmFactory)
    .config(['$sceDelegateProvider', function ($sceDelegateProvider) {
      // We must whitelist the JSONP endpoint that we are using to show that we trust it
      $sceDelegateProvider.resourceUrlWhitelist([

        'http://localhost:8026/**'
      ]);
    }])
    .controller('confirmController', confirmController);
  confirmController.$inject = ['$scope', '$http', '$templateCache', '$mdDialog', 'loggerSvc', 'confirmFactory', 'confirmService'];

  function confirmController($scope, $http, $templateCache, $mdDialog, loggerSvc, confirmFactory, confirmService) {
    var vm = this;
    vm.confirmId = "";
    vm.retData = {};
    vm.passengers = []
    vm.airSegments = []
    vm.prices = []
    vm.showConfirm = showConfirm;
    vm.test = test;
    vm.getDataApi = getDataApi;
    vm.doCancel=doCancel;

    $scope.$watch('vm.confirmId', function (current, original) {
      console.info(vm.confirmId)
      getDataApi(vm.confirmId);
    });





    //test 
    function test() {
      showAlert("info......")
      loggerSvc.writeLog("loggerSvc test....");
      confirmFactory.myFac("myFactory test....")
      alert("cancle....");
    }


    //showConfirm dialog
    function showConfirm(ev) {
      var confirm = $mdDialog.confirm()
        .title('确定执行此操作吗？')
        .textContent('确任后，订单将进行出票！')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('确认')
        .cancel('晚一点再确认');

      $mdDialog.show(confirm).then(function () {
        // showAlert()
        doConfirm(vm.confirmId)
      }, function () {
        alert("记得早点确认")
      });
    }

    //get data by http api from service   
    function getDataApi(id) {
      var data = confirmService.getData(id);
      data.then(function (res) {
        loggerSvc.writeLog(res);
        if (res.status == 200 && res.data != null && res.data.code == 1) {
          vm.retData = res.data;
          vm.passengers = vm.retData.data.Quotation[0].Passenger;
          vm.airSegments = vm.retData.data.Quotation[0].AirSegment;
          vm.prices = vm.retData.data.Quotation[0].Price
        }

      }, function (err) {
        console.info("localhost http failed" + err.status + "  " + err.statusText);
      });
    }

    //doConfirm()
    function doConfirm(id) {
      var result = confirmService.doConfirm(id);
      result.then(function (res) {
        loggerSvc.writeLog(res);
        if (res.status == 200 && res.data != null && res.data.code == 1) {
          showAlert("恭喜您，操作成功！");
        }


      }, function (err) {
        loggerSvc.writeLog("localhost http failed" + err.status + "  " + err.statusText);
        showAlert("操作失败，联系我们");
      });
    }
    //doCancel
    function doCancel(id) {

      var result = confirmService.doCancel(id);
      result.then(function (res) {
        loggerSvc.writeLog(res);
        if (res.status == 200 && res.data != null && res.data.code == 1) {
          showAlert("取消操作成功！");
        }

      }, function (err) {
        loggerSvc.writeLog("localhost http failed" + err.status + "  " + err.statusText);
        showAlert("操作失败，联系我们");
      });
    }
    //提示
    function showAlert(tips) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.body))
          .clickOutsideToClose(true)
          .title('提示')
          .textContent(tips)
          //.ariaLabel('好吧')
          .ok('OK!')
          .targetEvent("")
      );
    }
    //
    // var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK";
    //http://localhost:8026/api/values?callback=JSON_CALLBACK
    // remote api
    $scope.remoteApiTest = function () {
      var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK";
      $http.jsonp(url)
        .success(function (data, status, headers, config) {
          alert("jsonp data:",data.found)
          //console.info(data);
          loggerSvc.writeLog(data)

        })
        .error(function (data, status, headers, config) {
          //console.info(data);
          loggerSvc.writeLog(data)
        });

    }

  }

})();