const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/Menu', (req, res) => {
    res.render('Menu')
})


module.exports = router;