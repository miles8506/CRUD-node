const express = require('express');
const app = express();
const router = require('./router.js');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('html', require('express-art-template'));
app.use('/public/', express.static('./public'));
app.use('/node_modules/', express.static('./node_modules'));
app.use(router);
app.listen(5000, () => console.log('running'));