const { User } = require('../models/user.model');

const createUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    const newUser = await User.create({
        name,
        email,
        password,
    });

    newUser.password = undefined;

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
            usuario,
        },
    });

    if (!user) return next(new AppError('Invalid credentials', 400))

    const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);

    if (!isPasswordValid) return next(new AppError('Invalid credentials', 400))

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