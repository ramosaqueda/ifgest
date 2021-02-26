const express = require('express')
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //conectar bd
        this.conectarDB();
        //Middelwares
        this.middlewares();

        //rutas
        this.routes();
    }

    //conexion a base de datos
    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //directorio publico
        
        this.app.use(express.static('public'));
        //parseo y lectura del body this.app.use(cors());
        this.app.use(express.json());

    }

    routes(){
       
        this.app.use('/api/usuarios', require('../routes/usersRoute'));         
        
        /*this.app.get('*', function (req, res) {
            res.sendFile(__dirname+ '/../public/404.html');
          })
          */


    }

    listen(){
            this.app.listen(this.port, () => {
            console.log('Corriendo bicho en: ',this.port);
          })
    }
}

module.exports= Server;