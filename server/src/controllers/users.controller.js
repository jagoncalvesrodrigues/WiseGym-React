const UserModel = require("../models/user.model");

const usersController = {};
//donde va la info

usersController.createNewUser = async (req, res) => {
    console.log(req.body); // Verifica los datos que llegan desde el cliente
    const userInfo = req.body;

    const newUser = new UserModel({ ...userInfo });

    try {
        await newUser.save(); // Guarda el usuario en la base de datos
        const allUsers = await UserModel.find(); // Busca todos los usuarios
        return res.status(200).json(allUsers); // Devuelve todos los usuarios
    } catch (err) {
        console.error('Error al guardar usuario:', err); // Registra el error
        return res.status(500).json({ error: 'Error saving to database: ' + err });
    }
};

usersController.getUserById = async (req,res)=>{
    const {id} = req.params;
    try{
        const user = await UserModel.findById(id);
        if(!user){
            return res.status(404).json({error:'User not found'})
        }
        return res.status(200).json(user);
    }catch(error){
        return res.status(500).json({error:'Error reading database'});
    }
}

usersController.updateUser = async (req,res)=>{
    const {id}=req.params;
    const newUser = req.body;
    try{
        const userToUpdate = await UserModel.findById(id);
        if(!userToUpdate){
            return res.status(404).json({error:'User not found'})
        }
        await UserModel.updateOne({_id:id},{$set:{...newUser}});
        const allUsers = await UserModel.find()
        return res.status(200).json(allUsers);
    }catch(error){
        return res.status(500).json({error:'Error reading/write database'+error});
    }
}
usersController.addReservation = async (req,res)=>{
    const {id}=req.params;
    const newReservation = req.body;
    try{
        const userToUpdate = await UserModel.findById(id);
        if(!userToUpdate){
            return res.status(404).json({error:'User not found'})
        }
        await UserModel.updateOne({_id:id},{$push:{reserves:newReservation}});
        const allUsers = await UserModel.find()
        return res.status(200).json(allUsers);
    }catch(error){
        return res.status(500).json({error:'Error reading/write database'+error});
    }
}

usersController.getAllUsers = async (req,res)=>{
    try{
        const allUsers = await UserModel.find();
        return res.status(200).json(allUsers);
    }catch(error){
        return res.status(500).json({error:'Error reading database'});
    }
}


module.exports = usersController;