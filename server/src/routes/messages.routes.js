const express = require('express');
const messagesController = require('../controllers/messages.controller');
const messagesRoutes = express.Router();

messagesRoutes.get('/', messagesController.getAllMessages);
messagesRoutes.get('/:id', messagesController.getMessageById);
messagesRoutes.post('/', messagesController.createMessage);
messagesRoutes.patch('/:id', messagesController.updateMessage);
messagesRoutes.delete('/:id', messagesController.deleteMessage);
messagesRoutes.get('/:dateStart/:dateEnd', messagesController.getMessageByRangeDate);

module.exports = messagesRoutes;