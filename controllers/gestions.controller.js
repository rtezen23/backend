const { Gestion } = require('../models/gestion.model');
const { catchAsync } = require('../utils/catchAsync.util');

const getAllGestion = async (req, res, next) => {

    const gestions = await Gestion.findAll();

    res.status(200).json({
        status: 'success',
        gestions,
    });

};  

const createGestions = catchAsync(async (req, res, next) => {
    const gestions = req.body;

    const newGestions = await Gestion.bulkCreate(gestions);

    // newUser.password = undefined;

    res.status(201).json({
        status: 'success',
        newGestions,
    });
});

module.exports = {
    getAllGestion,
    createGestions
}