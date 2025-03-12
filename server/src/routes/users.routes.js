const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.get('/',usersController.getAllUsers);
usersRoutes.get('/:id',usersController.getUserById);
usersRoutes.post('/',usersController.createNewUser);
usersRoutes.patch('/:id',usersController.updateUser);
usersRoutes.patch('/addReservation/:id',usersController.addReservation);

module.exports = usersRoutes;