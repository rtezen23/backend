const { Gestion } = require('../models/gestion.model');

const getAllGestion = async (req, res, next) => {

    const gestions = await Gestion.findAll();

    res.status(200).json({
        status: 'success',
        gestions,
    });

};  

module.exports = {
    getAllGestion
}