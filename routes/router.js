const express = require('express')
const route = express.Router()

const homeroute = require('../controller/homeroute');
const create = require('../controller/create');

route.get('/', homeroute);
route.post('/', create);

module.exports = route;