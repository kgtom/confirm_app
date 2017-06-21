(function () {
    angular
        .module('confirmApp', ['ngMaterial'])
        .controller('IndexController', IndexController)
        // .config(function ($mdThemingProvider) {
        //     $mdThemingProvider.theme('docs-dark', 'default')
        //         .primaryPalette('yellow')
        //         .dark();
        // }
        // )
    function IndexController($scope, $http, $window, $mdDialog) {

        vm = this;
        vm.submitting = true;
        vm.codeData = {};
        vm.submit = submit;

        //提交
        function submit() {
            var parma = { id: vm.codeData.id, code: vm.codeData.code };
            $http.post("/checkCode", parma).success(function (data, status, headers, config) {
                console.info(data)
                if (data.data) {
                    $window.location.href = "/confirmation/" + vm.codeData.id
                } else {
                    showAlert("验证码无效");
                    vm.codeData.code=""
                }

            }).error(function (data, status, headers, config) {
                showAlert("出错啦，联系我们");
            })
        }
        //提示
        function showAlert(tips) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('提示')
                    .textContent(tips)
                    //.ariaLabel('好吧')
                    .ok('OK!')
                    .targetEvent("")
            );
        }

    }

})();