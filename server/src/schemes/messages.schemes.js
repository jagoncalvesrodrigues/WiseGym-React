const mongoose = require('mongoose')

const MessageScheme = mongoose.Schema({
    title: String,
    message: String,
    date: { type: Date, default: Date.now }
},{collection:'messages-collection'});

module.exports = MessageScheme;

//Esto da un archivo que js no entiende asi que se crea un modelo que hara que lo entienda