const express = require('express')
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //Middelwares
        this.middlewares();

        //rutas
        this.routes();
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