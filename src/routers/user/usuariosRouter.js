const express = require('express');
const routerUser = express.Router();
const userController = require('../../controller/userController.js');

routerUser.use(express.json());

routerUser.post('/', userController.createUser);

module.exports = routerUser;