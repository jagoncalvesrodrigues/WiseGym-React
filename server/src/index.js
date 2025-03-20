const express = require('express');
const app = express();
const port = process.env.PORT
const cors = require('cors');
const mongoose = require('mongoose');
const messagesRoutes = require('./routes/messages.routes');
const usersRoutes = require('./routes/users.routes');
// const usersRoutes = require('./routes/users.routes');
//acceso a las variables de entorno, teniendo acceso a lo que haya en .env
require('dotenv').config();


const corsOptions = {
  origin: '*', // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
};

app.use(cors(corsOptions));
app.use(express.json());

//lo juntamos con lo que tenemos
app.use('/api/messages',messagesRoutes);
app.use('/api/users',usersRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando en Vercel 🚀");
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
//conexion a la db
const startServer = async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('DATABASE CONNECTED')
  }catch (err){
    console.log('ERROR CORRE',err)
  }

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

startServer();

