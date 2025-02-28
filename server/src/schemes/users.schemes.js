const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
    _id: String,
    role: { type: String, default: "user" },
    name: { type: String, default: "" },
    email: String,
    suscription: Array,
    reserves: Array
},{collection:'gym-collection'})

module.exports = UserScheme;

