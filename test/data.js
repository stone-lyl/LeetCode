let info = {"$id":"1234324321","input":"1111","datapicker":1591027200000,"upload":"https://img.souche.com/bv0fin81b8lcvyfvjhj88i1iwkvj3ar1.png"};
let template = [{"valid":true,"result":"","isExpand":true,"des":"input","level":"0","defaultValue":"","rule":[],"isSelect":false,"type":"input","key":"input","content":""},{"valid":true,"result":"","isExpand":true,"des":"datapicker","level":"1","defaultValue":"","rule":[null,"timestamp"],"isSelect":false,"type":"datePicker","key":"datapicker","content":["",""]},{"valid":true,"result":"","isExpand":true,"des":"upload","level":"2","defaultValue":"","rule":[null,["任意"],979],"isSelect":true,"type":"upload","key":"upload","content":""}];

let infoObj = { $id: "1111", obj: { input: "222", radio: "2" } };
let templateObj = [
    {
        "level": "0", "defaultValue": [], "rule": [], "isSelect": false, "type": "object", "needSearch": false,
        "content": [{ "level": "0.0", "defaultValue": "", "rule": [], "isSelect": false, "type": "input", "needSearch": false, "content": "", "valid": true, "result": "", "isExpand": true, "des": "input", "needDisplay": false, "key": "input" }, { "level": "0.1", "defaultValue": "", "rule": [], "isSelect": false, "type": "radio", "needSearch": false, "content": [{ "isDefault": false, "disabled": false, "label": "1", "value": "1" }, { "isDefault": false, "disabled": false, "label": "2", "value": "2" }], "valid": true, "result": "", "isExpand": true, "des": "radio", "needDisplay": false, "key": "radio" }],
        "valid": true, "result": [], "isExpand": true, "des": "obj", "needDisplay": false, "key": "obj"
    }
];

let effectObj = {
    $id: "23333333333344",
    effectTime: {$startTime: "2020-07-01 00:00:00", $endTime: "2020-08-12 00:00:00", $effectiveStatus: null},
    input: "11111"
}
let effctTemplate = [
    { "level": "0", "defaultValue": {}, "rule": [], "isSelect": false, "type": "effectiveTime", "needSearch": true, "content": [{ "result": "", "des": "起始时间", "rule": ["yyyy-MM-dd HH:mm:ss"], "type": "datePicker", "key": "$startTime" }, { "result": "", "des": "结束时间", "rule": ["yyyy-MM-dd HH:mm:ss"], "type": "datePicker", "key": "$endTime" }, { "result": "", "virtual": true, "des": "生效状态", "searchFunction": "function execute ($effectiveStatus) {}", "rule": [], "displayFunction": "function execute ($startTime, $endTime, $now) {}", "type": "select", "key": "$effectiveStatus", "content": [{ "label": "已失效", "value": "0" }, { "label": "生效中", "value": "1" }, { "label": "待生效", "value": "2" }] }], "valid": true, "result": {}, "isExpand": true, "des": "effectTime", "flexItem": "100%", "needDisplay": true, "key": "effectTime" },
    { "level": "1", "defaultValue": "", "rule": [], "isSelect": true, "type": "input", "needSearch": true, "content": "", "valid": true, "result": "", "isExpand": true, "des": "input", "flexItem": "100%", "needDisplay": true, "key": "input" }]

let arrObj = {
    $id: "23333333333344",
    array: [{input: "1111111111111", obj1: {in: "2222222222"}, radio: "2"}]
};


let arrTemplate = [{
    "level": "0", "defaultValue": [], "rule": [], "isSelect": false, "type": "array", "needSearch": false, "content": [[{ "level": "0.0", "defaultValue": "", "rule": [], "isSelect": false, "type": "input", "needSearch": false, "content": "", "valid": true, "result": "", "isExpand": true, "des": "input", "needDisplay": false, "key": "input" }, { "level": "0.1", "defaultValue": "", "rule": [], "isSelect": true, "type": "radio", "needSearch": false, "content": [{ "isDefault": false, "disabled": false, "label": "1", "value": "1" }, { "isDefault": false, "disabled": false, "label": "2", "value": "2" }], "valid": true, "result": "", "isExpand": true, "des": "radio", "needDisplay": false, "key": "radio" }, {
        "level": "0.2", "defaultValue": [], "rule": [], "isSelect": false, "type": "object", "needSearch": false,
        "content": [
            { "level": "0.2.0", "defaultValue": "", "rule": [], "isSelect": false, "type": "input", "needSearch": false, "content": "", "valid": true, "result": "", "isExpand": true, "des": "in", "needDisplay": false, "key": "in" }
        ],
        "valid": true, "result": [], "isExpand": true, "des": "obj1", "needDisplay": false, "key": "obj1"
    }]], "valid": true, "result": [{ "level": "0.0", "defaultValue": "", "rule": [], "isSelect": false, "type": "input", "needSearch": false, "content": "", "valid": true, "result": "", "isExpand": true, "des": "input", "needDisplay": false, "key": "input" }, { "level": "0.1", "defaultValue": "", "rule": [], "isSelect": true, "type": "radio", "needSearch": false, "content": [{ "isDefault": false, "disabled": false, "label": "1", "value": "1" }, { "isDefault": false, "disabled": false, "label": "2", "value": "2" }], "valid": true, "result": "", "isExpand": true, "des": "radio", "needDisplay": false, "key": "radio" }, { "level": "0.2", "defaultValue": [], "rule": [], "isSelect": false, "type": "object", "needSearch": false, "content": [{ "level": "0.2.0", "defaultValue": "", "rule": [], "isSelect": false, "type": "input", "needSearch": false, "content": "", "valid": true, "result": "", "isExpand": true, "des": "in", "needDisplay": false, "key": "in" }], "valid": true, "result": [], "isExpand": true, "des": "obj1", "needDisplay": false, "key": "obj1" }], "isExpand": true, "des": "arr", "flexItem": "100%", "needDisplay": false, "key": "array"
}];

exports.Data =  {   
    info,
    template,
    infoObj,
    templateObj,
    effctTemplate,
    effectObj,
    arrObj,
    arrTemplate
}