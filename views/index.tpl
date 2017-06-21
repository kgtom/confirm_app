
<html xmlns="http://www.w3.org/1999/xhtml" >

<head>
<title>确认</title>

  <meta http-equiv="static-Type" static="text/html; charset=utf-8" />
  <link rel="stylesheet" href="/static/css/angular_material1.1.0/angular-material.min.css">

</head>
<!-- Angular Material requires Angular.js Libraries -->
<script src="/static/js/angularjs/1.5.5/angular.min.js"></script>
<script src="/static/js/angularjs/1.5.5/angular-animate.min.js"></script>
<script src="/static/js/angularjs/1.5.5/angular-aria.min.js"></script>
<script src="/static/js/angularjs/1.5.5/angular-messages.min.js"></script>


<!-- Angular Material Library -->
<script src="/static/js/material1.1.0/angular-material.min.js"></script>

<!--this page require js -->
<script src="/static/js/controller/index.js"></script>
<body ng-app="confirmApp" ng-controller="IndexController as ctrl" ng-cloak>
   <md-content md-theme="docs-dark" layout-gt-sm="row" layout-padding>
  <form name="userForm"   >
   <md-content layout="row" layout-xs="column" layout-padding class="md-content-l">
    <div ng-init="ctrl.codeData.id=<<<.id>>>" class="md-div" >
      <md-input-container >
        <label>输入四位数字验证码：</label>
        <input  ng-model="ctrl.codeData.code" type="number"    required ng-pattern="/^[0-9]{4}$/" >
      </md-input-container>
     
    </div>   
     <md-button class="md-primary md-raised " ng-disabled="!userForm.$valid" ng-click="ctrl.submit()" style="height:20px;text-align:center">
    确认
  </md-button>
  </md-content>
 
   
   </form>
   </md-content>
</body>
</html>

 <style type="text/css">
        
        .md-content-l {
           
background-color: #09F;
height:100%;
            
        }

       . md-div {
           text-align:center;
            
        }

      

    </style>