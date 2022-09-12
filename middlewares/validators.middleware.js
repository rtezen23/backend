//validator
const { body, validationResult } = require('express-validator');

const checkResult = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorArray = errors.array().map(error => error.msg);
        const message = errorArray.join(', ');

        return res.status(400).json({
            status: 'error',
            message
        });
    }

    next();
}

const createUserValidators = [
    body('doc').notEmpty().withMessage('Must provide a valid document'),
    body('email').isEmail().withMessage('Must provide a valid user email'),
    body('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long'),
    checkResult
];

module.exports = { createUserValidators };