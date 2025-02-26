const express = require('express');
const messagesController = require('../controllers/messages.controller');
const messagesRoutes = express.Router();

messagesRoutes.get('/', messagesController.getAllMessages);

module.exports = messagesRoutes;