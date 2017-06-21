package models

import (
	. "confirmation_app/utils"
	"fmt"

	"github.com/astaxie/beego"
)

//全局
var appErpHostUrl = beego.AppConfig.String("erpHostUrl")
var appInfoUrl = beego.AppConfig.String("getErpConfirmationUrl")
var appConfimrUrl = beego.AppConfig.String("confirmUrl")
var appCancleUrl = beego.AppConfig.String("cancleUrl")
var appCheckCodeUrl = beego.AppConfig.String("checkCodeUrl")

///获取erp confirm信息
func GetConfirmInfo(id string) (data *RetConfirmData, err error) {

	url := fmt.Sprintf("%s%s/%s", appErpHostUrl, appInfoUrl, id)
	return DoHttpGet(url)
}

//confirm
func Confirm(id string) (data *RetConfirmData, err error) {

	url := fmt.Sprintf("%s%s/%s", appErpHostUrl, appConfimrUrl, id)
	return DoHttpGet(url)
}

//cancel
func Cancel(id string) (data *RetConfirmData, err error) {

	url := fmt.Sprintf("%s%s/%s", appErpHostUrl, appCancleUrl, id)
	return DoHttpGet(url)
}

//check
func Check(id, code int) (data *RetConfirmData, err error) {
	var param = fmt.Sprintf("?id=%d&code=%d", id, code)
	beego.Debug("param...", param)
	url := fmt.Sprintf("%s%s%s", appErpHostUrl, appCheckCodeUrl, param)
	return DoHttpGet(url)
}
