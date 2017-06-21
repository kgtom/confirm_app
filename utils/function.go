package utils

import (
	"encoding/json"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/httplib"
)

type RetConfirmData struct {
	Success bool
	Message string
	Data    interface{}
}
type CheckData struct {
	Id   int `json:"id"`
	Code int `json:"code"`
}

func DoHttpGet(url string) (retData *RetConfirmData, err error) {
	beego.Debug("url...", url)
	req := httplib.Get(url)
	str, err := req.String()
	ret := &RetConfirmData{}
	err = json.Unmarshal([]byte(str), &ret)
	return ret, err
}
