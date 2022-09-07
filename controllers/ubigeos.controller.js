const { Ubigeo } = require('../models/ubigeo.model');

const getAllUbigeos = async (req, res, next) => {

    const ubigeos = await Ubigeo.findAll();

    res.status(200).json({
        status: 'success',
        ubigeos,
    });

};  

module.exports = {
    getAllUbigeos
}