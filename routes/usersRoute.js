const { Router } = require ('express');
const {usuariosGet,usuariosDelete,usuariosPut,usuariosPatch,usuariosPost} = require('../controllers/usersController');
const router = Router();

router.get('/',  usuariosGet);
router.put('/:id',  usuariosPut);
router.delete('/',  usuariosDelete);
router.patch('/',  usuariosPatch);
router.post('/',  usuariosPost);

 

module.exports= router;