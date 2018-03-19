const util = require('./util');

let queryData = function (router, readFile, saveFile, encoding) {
    router.get('/data', (request, response) => {
        response.json({message: "test request"});
    });
};

let insertData = function (router, readFile, saveFile, encoding) {
    router.post('/data', function (request, response) {
        let {tableName, datas} = request.body;
        readFile(tableName + '.json', encoding).then(data => {
            saveFile(tableName + '.json', JSON.stringify((JSON.parse(data) || []).concat(datas)), encoding)
        }).then(function () {
            response.json({message: 'suss'});
        });
    });
};
let updateData = function (router, readFile, saveFile, encoding) {
    router.put('/data', (request, response) => {
        response.json({message: "put"});
    });
};
let deleteData = function (router, readFile, saveFile, encoding) {
    router.delete('/data', (request, response) => {
        response.json({message: "delete"});
    });
};

exports.init = (router) => {
    var encoding = util.getEncoding();
    var TABLE_LIST = util.getTableList();
    var readFile = util.readFile;
    var saveFile = util.saveFile;
    queryData(router, readFile, saveFile, encoding);
    insertData(router, readFile, saveFile, encoding);
    updateData(router, readFile, saveFile, encoding);
    deleteData(router, readFile, saveFile, encoding);
};

