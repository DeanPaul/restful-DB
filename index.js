const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require('body-parser');

const fs = require('fs');

const url = require('url');


var encoding = "utf8";
var TABLE_LIST = "tableList.json";
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.get('/', (request, response) => response.send('Hello World'));

app.use('/api', router);

router.get('/', (request, response) => {
  response.json({message: 'Hello, welcome to my server'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

router.get('/data', (request, response) => {
  response.json({message: "test request"});
});
router.post('/data', function (request, response) {
	let {tableName,datas} = request.body;
	readFile(tableName+'.json',encoding).then(data=>{
		saveFile(tableName+'.json',JSON.stringify((JSON.parse(data)||[]).concat(datas)),encoding)
	}).then(function(){
		response.json({message: 'suss'});
	});
});
router.put('/data', (request, response) => {
  response.json({message: "put"});
});
router.delete('/data', (request, response) => {
  response.json({message: "delete"});
});

var readFile = function(fileName,encoding){
	return new Promise(function(resolve, reject) {
		fs.readFile( fileName, encoding, function (err, data) {
			err ? reject(err) : resolve(data);
		});
	})
}
var saveFile = function(fileName,content,encoding){
	return new Promise(function(resolve, reject) {
		fs.writeFile( fileName, content, encoding, function (err) {
			err ? reject(err) : resolve();
		});
	})
}

router.post('/table', function (request, response) {
	var content = '[]';
	let datas = request.body;
	let name = datas.name;
	console.log(name);
	readFile('tableList.json',encoding).then(data=>{
		saveFile('tableList.json',JSON.stringify(JSON.parse(data).concat(datas)),encoding)
	}).then(()=>{
		saveFile(name+'.json', content, encoding);
	}).then(function(){
		response.json({message: 'suss'});
	});
});

router.get('/table', function (request, response) {
	
	readFile('tableList.json',encoding).then(data=>{
		var urlParts = url.parse(request.url, true);
		var parameters = urlParts.query;
		var name = parameters.name;
		console.log(name)
		if(name){response.json({data: JSON.parse(data).filter(d=>d.name===name)});}
		response.json({data: JSON.parse(data)});
	})
		
	
});
