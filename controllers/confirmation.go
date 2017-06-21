package controllers

import (
	"confirmation_app/models"
	"confirmation_app/utils"
	"encoding/json"
	"io/ioutil"

	"github.com/astaxie/beego"
)

// 确认单信息页面
type ConfirmationController struct {
	beego.Controller
}

// @Title  Get
// @Description find object by id
// @Param   id        string
// @Success code=1 {object} models.Object
// @Failure code=0 :objectId is empty
// @router /confirmation/:id [get]
func (c *ConfirmationController) Get() {
	id := c.Ctx.Input.Param(":id")
	c.Data["id"] = id
	c.TplName = "info.html"
}

// 异步获取确认单信息
type ShowConfirmationController struct {
	beego.Controller
}

// @Title  Get
// @Description find object by id
// @Param   id        string
// @Success code=1 {object} models.Object
// @Failure code=0 :objectId is empty
// @router /showConfirm/info/:id [get]
func (c *ShowConfirmationController) Get() {

	id := c.Ctx.Input.Param(":id")
	ret, err := models.GetConfirmInfo(id)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"code": 0, "message": err.Error(), "id": id, "data": ret.Data}
		c.ServeJSON()
		return
	}
	c.Data["json"] = map[string]interface{}{"code": 1, "message": ret.Message, "id": id, "data": ret.Data}
	c.ServeJSON()
}

//提交验证码功能
type CheckConfirmationController struct {
	beego.Controller
}

func (c *CheckConfirmationController) Post() {

	beego.Debug("c.Ctx.Request.Body....", c.Ctx.Request.Body)

	body, _ := ioutil.ReadAll(c.Ctx.Request.Body)
	beego.Debug("body....", body)
	var obj utils.CheckData
	json.Unmarshal(body, &obj)

	beego.Debug("id:", obj.Id, "code:", obj.Code)
	ret, err := models.Check(obj.Id, obj.Code)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"code": 0, "message": err.Error(), "id": obj.Id, "data": ret.Data}
		c.ServeJSON()
		return
	}
	c.Data["json"] = map[string]interface{}{"code": 1, "message": ret.Message, "data": ret.Data}
	c.ServeJSON()
}

//确认功能
func (c *CheckConfirmationController) Get() {
	id := c.Ctx.Input.Param(":id")
	beego.Debug("id..", id)
	ret, err := models.Confirm(id)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"code": 0, "message": err.Error(), "id": id, "data": ret.Data}
		c.ServeJSON()
		return
	}
	c.Data["json"] = map[string]interface{}{"code": 1, "message": ret.Message, "id": id, "data": ret.Data}
	c.ServeJSON()
}
