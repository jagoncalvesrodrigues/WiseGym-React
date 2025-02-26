const mongoose = require('mongoose')

const MessageScheme = mongoose.Schema({
    _id: String,
    title: String,
    message: String,
    date: Date
});

module.exports = MessageScheme;

//Esto da un archivo que js no entiende asi que se crea un modelo que hara que lo entienda