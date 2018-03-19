const fs = require('fs');

exports.readFile = (fileName,encoding)=>
    new Promise((resolve, reject) => fs.readFile(fileName, encoding, (err, data) => err ? reject(err) : resolve(data)))

exports.saveFile = (fileName,content,encoding)=>
	new Promise((resolve, reject)=> fs.writeFile(fileName, content, encoding, (err) => err ? reject(err) : resolve()))

exports.getEncoding= () => "utf8";

exports.getTableList= () => "tableList.json";


