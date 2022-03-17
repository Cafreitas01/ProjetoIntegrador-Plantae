const terrariosModel = require('../models/terrarios.json');

const terrariosController = {
    buscarTerrarios: (req, res) => {
        res.render('terrarios', { terrarios: terrariosModel })
    }
};

module.exports = terrariosController;