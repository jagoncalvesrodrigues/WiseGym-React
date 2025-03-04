const MessageModel = require("../models/message.model");

const messagesController = {};

messagesController.getAllMessages = async (req,res)=>{
    try{
        const allMessages = await MessageModel.find();
        return res.status(200).json(allMessages);
    }catch(error){
        return res.status(500).json({error:'Error reading database'});
    }
}
messagesController.getMessageById = async (req,res)=>{
    const {id} = req.params;
    try{
        const message = await MessageModel.findById(id);
        if(!message){
            return res.status(404).json({error:'Message not found'})
        }
        return res.status(200).json(message);
    }catch(error){
        return res.status(500).json({error:'Error reading database'});
    }
}
messagesController.createMessage = async (req,res)=>{
    const messageInfo = req.body;
    const newMessage = new MessageModel({...messageInfo});
    try{
        await newMessage.save();
        const allMessages = await MessageModel.find()
        return res.status(200).json(allMessages);
    }catch(error){
        return res.status(500).json({error:'Error reading/write database'});
    }
}
messagesController.updateMessage = async (req,res)=>{
    const {id} = req.params;
    const newMessage = req.body;
    try{
        const mesageToUpdate = await MessageModel.findById(id)
        if(!mesageToUpdate){
            return res.status(404).json({error:'Message not found'})
        }
        await MessageModel.updateOne({_id:id},{$set:{...newMessage}});
        const allMessages = await MessageModel.find()
        return res.status(200).json(allMessages);

    }catch(error){
        return res.status(500).json({error:'Error reading/write database'+error});
    }
}

messagesController.deleteMessage = async (req,res)=>{
    const {id} = req.params;

    try{
        const mesageToUpdate = await MessageModel.findById(id);
        if(!mesageToUpdate){
            return res.status(404).json({error:'Message not found'})
        }
        await MessageModel.deleteOne({_id:id});
        const allMessages = await MessageModel.find()
        return res.status(200).json(allMessages);
    }catch(error){
        return res.status(500).json({error:'error deleting in database'})
    }
}

messagesController.getMessageByRangeDate = async (req,res)=>{
    const {dateStart,dateEnd} = req.params;
    try{
        const messages = await MessageModel.find({
            date: { $gte: new Date(dateStart), $lte: new Date(dateEnd) }
        });
        if(!messages){
            return res.status(404).json({error:'Message not found'})
        }
        return res.status(200).json(messages);
    }catch(error){
        return res.status(500).json({error:'Error reading database'});
    }
}

module.exports = messagesController;