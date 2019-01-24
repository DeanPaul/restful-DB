const url = require('url');
const util = require('./util');
const { dbHome, tableList, readFile, saveFile, removeFile, tableAPIName } = util;

let createTable = (router) => {
    router.post(tableAPIName, (request, response) => {
        var content = '[]';
        let data = request.body;
        let name = data.name;
        readFile(dbHome + tableList)
            .then(d => saveFile(dbHome + tableList, JSON.stringify(JSON.parse(d).concat(data))))
            .then(() => saveFile(dbHome + name + '.json', content))
            .then(() => response.json({message: 'suss'}));
    });
};

let listTable = (router) => {
    router.get(tableAPIName, (request, response) => {
        readFile(dbHome + tableList).then(data => {
            let urlParts = url.parse(request.url, true);
            let parameters = urlParts.query;
            let name = parameters.name;
            if (name) {
                response.json({data: JSON.parse(data).filter(d => d.name === name)});
            }
            response.json({data: JSON.parse(data)});
        })
    });
};

let deleteTable = (router) => {
    router.delete(tableAPIName, (request, response) => {
        let name = request.body.name;
        if(name){
            readFile(dbHome + tableList)
                .then(data => saveFile(dbHome + tableList, JSON.stringify(JSON.parse(data).filter(d => d.name !== name))))
                .then(() => removeFile(dbHome + name + '.json'))
                .then(() => response.json({message: 'suss'}));
        }

    });
};


exports.init = (router) => {
    createTable(router);
    listTable(router);
    deleteTable(router);
};
