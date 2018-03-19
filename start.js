const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
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
