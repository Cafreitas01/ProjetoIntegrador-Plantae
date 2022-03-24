const viveiroModel = require('../models/viveiro.json');

const viveiroController = {
    buscarviveiro: (req, res) => {
        req.buscarViveiro('viveiroModel')
        res.render('viveiro', { viveiro: viveiroModel })
    }
};

module.exports = viveiroController;