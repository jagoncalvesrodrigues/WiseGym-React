const MessageModel = require("../models/message.model");

const messagesController = {};

messagesController.getAllMessages = async (req,res)=>{
    try{
        const allMessages = await MessageModel.find();
        return res.status(200).json(allMessages);
    }catch{
        return res.status(500).json({error:'Error reading database'});
    }
}

module.exports = messagesController;