const { Router } = require('express')
const router = Router();

const { renderIndex, renderMenu, renderLogin, renderRegistro} = require('../controllers/index.controller')

router.get('/', renderIndex);

router.get('/Menu', renderMenu);

router.get('/Login', renderLogin);

router.get('/Registro', renderRegistro);


module.exports = router;