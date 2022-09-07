const { User } = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { AppError } = require('../utils/appError.util');
const { catchAsync } = require('../utils/catchAsync.util');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
// md5
const md5 = require('md5');


const createUser = catchAsync(async (req, res, next) => {
    const { apellidos, nombres, fechanac, sexo, doc, estciv, carfam, numhij, direccion,
        distrito, dpto, refdir, tlf, cel, email, gradoins, cargo, idsucursal, usuario, password,
        idestado, fecha_registro, fecha_baja, id_cartera } = req.body;

    // const salt = await bcrypt.genSalt(12);
    // const hashPassword = await bcrypt.hash(PASSWORD, salt);

    const newUser = await User.create({
        APELLIDOS: apellidos,
        NOMBRES: nombres,
        FECHANAC: fechanac,
        SEXO: sexo,
        DOC: doc,
        ESTCIV: estciv,
        CARFAM: carfam,
        NUMHIJ: numhij,
        DIRECCION: direccion,
        DISTRITO: distrito,
        DPTO: dpto,
        REFDIR: refdir,
        TLF: tlf,
        CEL: cel,
        EMAIL: email,
        GRADOINS: gradoins,
        CARGO: cargo,
        IDSUCURSAL: idsucursal,
        USUARIO: usuario,
        PASSWORD: md5(password),
        IDESTADO: idestado,
        fecha_registro: fecha_registro,
        fecha_baja: fecha_baja,
        id_cartera: id_cartera,
        api_token: "",
    });

    // newUser.password = undefined;

    res.status(201).json({
        status: 'success',
        newUser,
    });
});

const login = catchAsync(async (req, res, next) => {
    const { usuario, password } = req.body;
    const user = await User.findOne({
        where: {
            USUARIO: usuario,
        },
    });

    if (!user) return next(new AppError('Invalid user', 400))

    // const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);
    const isPasswordValid = user.PASSWORD === md5(password) ;
    
    if (!isPasswordValid) return next(new AppError('Invalid password', 400))

    const token = await jwt.sign({ id: user.IDPERSONAL }, process.env.JWT_SECRET, {
        expiresIn: 30,
    });

    res.status(200).json({
        status: 'success',
        token,
        user
    });
});

const getAllUsers = catchAsync(async (req, res, next) => {

    const users = await User.findAll();

    res.status(200).json({
        status: 'success',
        users,
    });

});

module.exports = {
    createUser,
    login,
    getAllUsers,
};