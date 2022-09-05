const { User } = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { AppError } = require('../utils/appError.util');

const createUser = async (req, res, next) => {
    const { APELLIDOS, NOMBRES, USUARIO, PASSWORD } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(PASSWORD, salt);

    const newUser = await User.create({
        APELLIDOS,
        NOMBRES,
        FECHANAC: '',
        SEXO: 1,
        DOC: 1,
        ESTCIV: 2,
        CARFAM: 2,
        NUMHIJ: 3,
        DIRECCION: '',
        DISTRITO: '',
        DPTO: '',
        REFDIR: '',
        TLF: '',
        CEL: '',
        EMAIL: '',
        GRADOINS: 1,
        CARGO: 2,
        IDSUCURSAL: 4,
        USUARIO,
        PASSWORD: hashPassword,
        IDESTADO: 10,
        fecha_registro: '',
        fecha_baja: '',
        id_cartera: 20,
        api_token: ''
    });


    // newUser.password = undefined;

    res.status(201).json({
        status: 'success',
        newUser,
    });
};

// const login = async (req, res, next) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({
//         where: {
//             email,
//             password
//         },
//     });

//     res.status(200).json({
//         status: 'success',
//         user
//     });
// };

const login = async (req, res, next) => {
    const { usuario, password } = req.body;
    const user = await User.findOne({
        where: {
            USUARIO: usuario,
        },
    });

    if (!user) return next(new AppError('Invalid user', 400))

    const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);
    console.log(isPasswordValid);
    if (!isPasswordValid) return next(new AppError('Invalid password', 400))

    res.status(200).json({
        status: 'success',
        isPasswordValid,
    });
};

const getAllUsers = async (req, res, next) => {

    const users = await User.findAll();

    res.status(200).json({
        status: 'success',
        users,
    });

};

module.exports = {
    createUser,
    login,
    getAllUsers,
};