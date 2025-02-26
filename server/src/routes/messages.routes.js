const express = require('express');
const messagesController = require('../controllers/messages.controller');
const messagesRoutes = express.Router();

messagesRoutes.get('/', messagesController.getAllMessages);
messagesRoutes.get('/:id', messagesController.getMessageById);
messagesRoutes.post('/', messagesController.createMessage);
messagesRoutes.patch('/:id', messagesController.updateMessage);
messagesRoutes.delete('/:id', messagesController.deleteMessage);

module.exports = messagesRoutes;