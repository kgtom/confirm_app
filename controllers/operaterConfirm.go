package controllers

import (
	"confirmation_app/models"

	"github.com/astaxie/beego"
)

//取消模块
type OperateConfirmController struct {
	beego.Controller
}

//取消功能
func (c *OperateConfirmController) Get() {
	id := c.Ctx.Input.Param(":id")
	beego.Debug("id..", id)
	ret, err := models.Cancel(id)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"code": 0, "message": err.Error(), "id": id, "data": ret.Data}
		c.ServeJSON()
		return
	}
	c.Data["json"] = map[string]interface{}{"code": 1, "message": ret.Message, "id": id, "data": ret.Data}
	c.ServeJSON()
}
