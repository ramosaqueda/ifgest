const { response, request } = require('express');
const Usuario = require('../models/users');
const bcryptjs = require('bcryptjs');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPost = async (req, res = response) => {
    
    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol} );
    //verificar el correo existe

    const existeEmail = await Usuario.findOne({correo}); //esto es igual a correo:correo
    if (existeEmail){
        return res.status(400).json({
            msg:'El correo ya esta registrado'
        })
    }

    //encriptar
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);


    await usuario.save();
    res.json({
        msg: 'post API - usuariosPost' ,
        usuario
    });
}

const usuariosPut = (req=request, res = response) => {

    const { id } = req.params;
    const{name='noname', edad='no definido'} = req.query;

    res.json({
        msg: 'put API - usuariosPut',
        name,
        edad//eso
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}