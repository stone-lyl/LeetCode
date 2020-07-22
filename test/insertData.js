const Data = require('./data').Data;

function /**
* 将数据插入模板中
* @param {object} info 格式化后的数据信息
* @param {Array} template 模板的originContent
*/
dataInsertTemplate(info, template) {
   /**
    * 根据不同类型选择，处理后进行循环
    * @param {any} item 每一项的数据结构
    * @param {*} data 数据
    */
   const coreLogic = (data, item) => {
       if (item.type === 'object') {
           loopInsert(itemData, item.content);
       } else if (item.type === 'array') {
           const len = itemData.length;
           let arr = [];
           console.log(item, 'item content');
           if (len > 1) {
               let dataJson = JSON.stringify(item.content[0]);
               for (let i = 0; i < len; i += 1) {
                   arr[i] = JSON.parse(dataJson);
               }
               item.content = arr;
           }
           console.log(item, 'arr !!!!!!!');
           loopInsert(itemData, item.content);
       } else if (item.type === 'effectiveTime') {
           item.result = itemData;
           loopInsert(itemData, item.content);
       } else if (Array.isArray(item)) {
           item.forEach((innerItem) => {
               loopInsert(data, innerItem);
           });
       } else if (Object.prototype.hasOwnProperty.call(data, item.key)) {
           item.result = itemData;
       }
   };
   const loopInsert = (data, list) => {
       if (Array.isArray(list)) {
           list.forEach((item, index) => {
               if (Array.isArray(data)) {
                   coreLogic(data[index], item);
               } else {
                   coreLogic(data, item);
               }
           });
       } else if (Object.prototype.hasOwnProperty.call(data, list.key)) {
           console.log(`key: ${list.key}, type: ${list.type}, result: ${data[list.key]}`)
           list.result = data[list.key];
       }
   };
    loopInsert(info, template);
    console.log(JSON.stringify(template), 'result');
   return template;
};


// dataInsertTemplate(Data.arrObj, Data.arrTemplate);

function dataInsertTemplate1(info, template) {
    /**
     * 根据不同类型选择，处理后进行循环
     * @param {any} item 每一项的数据结构
     * @param {*} data 数据
     */
    const coreLogic = (data, item) => {
        // data 中是否有对应的数据信息需要填充
        let itemData = '';
        if (Object.prototype.hasOwnProperty.call(data, item.key)) {
            itemData = data[item.key];
        } else if (Array.isArray(item)) {
            item.forEach((innerItem) => {
                coreLogic(data, innerItem);
            })
        };
        console.log('itemData(result):', itemData, 'item type', item.type);
        if (item.type === 'object') {
            coreLogic(itemData, item.content);
        } else if (item.type === 'array' && Array.isArray(itemData)) {
            const len = itemData.length;
            let arr = [];
            console.log(item, 'item content');
            if (len > 1) {
                let dataJson = JSON.stringify(item.content[0]);
                for (let i = 0; i < len; i += 1) {
                    // todo arr[i] = cloneDeep(item.content[0]);
                    arr[i] = JSON.parse(dataJson);
                    console.log('data[i]: ', itemData[i], 'arr[i]:', arr[i]);
                    coreLogic(itemData[i], arr[i]);
                }
                item.content = arr;
            } else {
                console.log('data[0]: ', itemData[0], 'arr[0]:', item.content[0]);
                coreLogic(itemData[0], item.content[0]);
            }
            console.log(item, 'arr !!!!!!!');
        } else if (item.type === 'effectiveTime') {
            item.result = itemData;
            coreLogic(itemData, item.content);
        } else {
            item.result = itemData;
        }
    };

    template.forEach((item) => {
        coreLogic(info, item);
    })
    console.log(JSON.stringify(template), 'result');
    return template;
};
 
dataInsertTemplate1(Data.info, Data.template);
