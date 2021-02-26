const mongoose = require('mongoose');
const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN,{             
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            UseCreateIndex: true 
            //useFindAndModify:true
        });
        console.log('BD Mongo online');
    }
    catch(error) {
        console.log(error);
        throw new Error('Error en la conexion a la BD de Mongo');
    }
}

module.exports = {
    dbConnection
}