const viveiroModel = require('../models/viveiro.json');

const viveiroController = {
    buscarviveiro: (req, res) => {
        res.render('viveiro', { viveiro: viveiroModel })
    }
};

module.exports = viveiroController;