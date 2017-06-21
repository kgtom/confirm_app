package routers

import (
	"confirmation_app/controllers"

	"github.com/astaxie/beego"
)

func init() {

	//验证码模块
	beego.Router("/check/:id", &controllers.MainController{})
	beego.Router("/checkCode", &controllers.CheckConfirmationController{})
	//获取信息
	beego.Router("/confirmation/:id", &controllers.ConfirmationController{})
	beego.Router("/showConfirm/info/:id", &controllers.ShowConfirmationController{})
	//确定及取消
	beego.Router("/confirm/:id", &controllers.CheckConfirmationController{})
	beego.Router("/cancel/:id", &controllers.OperateConfirmController{})

}
