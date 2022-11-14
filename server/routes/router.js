const express = require('express')
const route = express.Router()

const homeroute = require('../controller/homeroute');
const create = require('../controller/create');
const del = require('../controller/delete');

route.get('/', homeroute);
route.post('/', create);
route.post('/delete', del);

module.exports = route;