const url = require('url');
const util = require('./util');

let createTable = (router,readFile,saveFile,encoding)=>{
    router.post('/table', (request, response) => {
    	var content = '[]';
    	let datas = request.body;
    	let name = datas.name;
    	console.log(name);
    	readFile('tableList.json',encoding)
            .then(data=> saveFile('tableList.json',JSON.stringify(JSON.parse(data).concat(datas)),encoding))
            .then(()=> saveFile(name+'.json', content, encoding))
            .then(()=> response.json({message: 'suss'}));
    });
}

let listTable = (router,readFile,saveFile,encoding)=>{
    router.get('/table',  (request, response) => {
    	readFile('tableList.json',encoding).then(data=>{
    		var urlParts = url.parse(request.url, true);
    		var parameters = urlParts.query;
    		var name = parameters.name;
    		if(name){response.json({data: JSON.parse(data).filter(d=>d.name===name)});}
    		response.json({data: JSON.parse(data)});
    	})
    });
}

exports.init = (router) => {
    var encoding = util.getEncoding();
    var TABLE_LIST = util.getTableList();
    var readFile = util.readFile;
    var saveFile = util.saveFile;
    createTable(router,readFile,saveFile,encoding);
    listTable(router,readFile,saveFile,encoding);
}
