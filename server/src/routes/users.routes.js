const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.post('/',usersController.createNewUser);

module.exports = usersRoutes;