const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderMenu = (req, res) => {
    res.render('Menu')
};

indexCtrl.renderLogin = (req, res) => {
    res.render('Login')
};

indexCtrl.renderRegistro = (req, res) => {
    res.render('Registro')
};

module.exports = indexCtrl;