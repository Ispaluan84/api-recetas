const { body, validationResult } = require('express-validator');

exports.recipeValidationRules = [
    body('title').notEmpty().withMessage('El titulo es obligatorio'),
    body('ingredients').isArray({ min: 1 }).withMessage('Debe incluir al menos 1 ingrediente'),
    body('instructions').notEmpty().withMessage('Las instrucciones son obligatorias')
];

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
};