const fs = require('fs');
const ENCODING = "utf8";

exports.readFile = (fileName) =>
    new Promise((resolve, reject) => fs.readFile(fileName, ENCODING, (err, data) => err ? reject(err) : resolve(data)));

exports.saveFile = (fileName, content) =>
    new Promise((resolve, reject) => fs.writeFile(fileName, content, ENCODING, (err) => err ? reject(err) : resolve()));

exports.removeFile = (fileName) =>
    new Promise((resolve, reject) => fs.unlink(fileName, (err) => err ? reject(err) : resolve()));


exports.tableList = "tableList.json";

exports.dbHome = "db/";

exports.tableAPIName = "/table";
exports.dataAPIName = "/data";