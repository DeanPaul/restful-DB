const util = require('./util');
const { dbHome, tableList, readFile, saveFile, removeFile, dataAPIName } = util;

let queryData = function (router) {
    router.get(dataAPIName, (request, response) => {
        let urlParts = url.parse(request.url, true);
        let parameters = urlParts.query;
        let name = parameters.name;
        if(name){
            let columns = [];
            readFile(dbHome + tableList).then(data => {
                let findTable = JSON.parse(data).filter(d => d.name === name);
                columns = findTable && findTable[0].columns;
            }).then(() => readFile(dbHome + name + ".json").then(data => {
                response.json({columns, data: JSON.parse(data)});
            }))
        }
    });
};

let insertData = function (router) {
    router.post(dataAPIName, function (request, response) {
        let {name, data} = request.body;
        readFile(dbHome + name + ".json")
            .then(d => saveFile(dbHome + name + ".json", JSON.stringify((JSON.parse(d) || []).concat(data))))
            .then(() => response.json({message: 'suss'}))
    });
};
let updateData = function (router) {
    router.put(dataAPIName, (request, response) => {
        response.json({message: "put"});
    });
};
let deleteData = function (router) {
    router.delete(dataAPIName, (request, response) => {
        let { name, conditions } = request.body;
        if(name){
            if(conditions){
                conditions.operator;
                conditions.kv;
                if(conditions.kv.length === 1){

                }
            }else{
                saveFile(dbHome + name + ".json", JSON.stringify([]))
                    .then(() => response.json({message: "delete"}))
            }
        }

    });
};

exports.init = (router) => {
    queryData(router);
    insertData(router);
    updateData(router);
    deleteData(router);
};

