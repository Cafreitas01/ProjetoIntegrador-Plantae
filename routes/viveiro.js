const { render } = require("express/lib/response");

const viveiroModel = render('../middleware/viveiro.js');

const viveiroController = {
    buscarviveiro: (req, res) => {
        res.render('viveiro', { viveiro: viveiroModel })
    }
};

module.exports = viveiroController;
