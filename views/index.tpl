
<html xmlns="http://www.w3.org/1999/xhtml" >

<head>
<title>确认</title>
 <<<template "inc/meta.tpl" .>>>
</head>
<<<template "inc/foot.tpl".>>>
<!--this page require js -->
<script src="/static/js/controller/index.js"></script>
<body ng-app="confirmApp" ng-controller="IndexController as ctrl" ng-cloak>
   <md-content >
  <form name="userForm">
   <md-content layout="row" layout-xs="column" layout-padding class="md-content-l">
  
    <div ng-init="ctrl.codeData.id=<<<.id>>>" class="md-div" >
      <p class="md-div-p2"><img src="/static/img/os/test.png" style="height:200px;"></p>
      <md-input-container class="md-input-c2">
        <label>输入四位数字验证码：</label>
        <input  ng-model="ctrl.codeData.code" type="number"    required ng-pattern="/^[0-9]{4}$/"  style="height:50px;">
      </md-input-container>
     <div><md-button class="md-primary md-raised " ng-disabled="!userForm.$valid" ng-click="ctrl.submit()" flex="300">
    确认
  </md-button></div>
    </div>   
     
  </md-content>
 
   
   </form>
   </md-content>
</body>
</html>

 <style type="text/css">
        
.md-content-l {
	height:100%;
}
.md-div {
	width:100%;
	padding-top:500px;
	text-align:center;
	float:left;
	height:50px;
}
.md-div-p2 {
	width:100%;
	float:left;
	text-align:center;
	height:400px;
}
.md-input-c2 {
	width:300px;
	font-size:xx-large;
	padding-top:20px;
}

    </style>