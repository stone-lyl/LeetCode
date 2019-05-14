let arr = [
    {
        "name": "字段名称",
        "type": "类型",
        "allowNull": false,
        "comment": "描述"
    },
    {
        "name": "id",
        "type": "int",
        "allowNull": false,
        "comment": ""
    },
    {
        "name": "name",
        "type": "varchar",
        "allowNull": false,
        "comment": "名称"
    },
    {
        "name": "desc",
        "type": "varchar",
        "allowNull": false,
        "comment": "描述"
    },
    {
        "name": "owner_id",
        "type": "int",
        "allowNull": false,
        "comment": "所有者id"
    },
    {
        "name": "note",
        "type": "text",
        "allowNull": true,
        "comment": "备注信息， 默认为空"
    },
    {
        "name": "disable",
        "type": "int",
        "allowNull": false,
        "comment": "0： 未激活 1：已激活"
    },
    {
        "name": "created_at",
        "type": "datetime",
        "allowNull": false,
        "comment": ""
    },
    {
        "name": "updated_at",
        "type": "datetime",
        "allowNull": false,
        "comment": ""
    },
    {
        "name": "",
        "type": "",
        "allowNull": true,
        "comment": ""
    }
];

function formatName(name) {
    // indexOf 0开始
    let obj = {};
    let index = name.indexOf('_');
    obj.name = name;
    if(index !== -1){
        obj.name = `${name.substring(0, index)}${name.substring(index+1, index + 2).toUpperCase()}${name.substring(index+2)}`
        obj.field = name;
        // console.log(formatName);
    }
    return obj;
}
function formatType(type) {
    let result;
    switch (type) {
        case "int":
            result = "number";
            break;
        case "varchar":
        case "text":
            result = "string";
            break;
        case "datetime":
            result = "Date";
            break;
        default:
            break;
    }
    // console.log(result);
    return result;
}
function formatNull(allowNull) {
    if(allowNull=== false) {
        return "@AllowNull(false)";
    }
}
let column = arr.map(element => {
    let obj = {};
    obj.name = formatName(element.name).name;
    obj.type = formatType(element.type);
    if (formatName(element.name).filed){
        obj.filed = formatName(element.name).filed;
    }
    obj.comment = element.comment;
    obj.allowNull = formatNull(element.allowNull);
    console.log(obj);
});
console.log(column);