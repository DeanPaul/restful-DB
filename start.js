const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/', (request, response) => response.send('Hello World'));

app.use('/api', router);


router.get('/', (request, response) => {
    response.json({message: 'Hello, welcome to my server'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

var tableManagement = require('./tableManagement');
var dataManagement = require('./dataManagement');

tableManagement.init(router);
dataManagement.init(router);
