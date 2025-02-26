const mongoose = require("mongoose");
const MessageScheme = require("../schemes/messages.schemes");

const MessageModel = mongoose.model('Message',MessageScheme);

module.exports = MessageModel;