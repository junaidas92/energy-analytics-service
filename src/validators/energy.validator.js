const { body, param } = require('express-validator');

const consumptionValidator = [
    body('machineIds')
        .isArray({ min: 1 })
        .withMessage('machineIds must be a non-empty array'),
    body('machineIds.*')
        .isInt()
        .withMessage('each machineId must be a number'),
    body('startDate')
        .notEmpty()
        .withMessage('Start date is required')
        .isDate()
        .withMessage('Start date must be a valid date'),
    body('endDate')
        .notEmpty()
        .withMessage('end date is required')
        .isDate()
        .withMessage('end date must be a valid date'),
    
];

const machineIdValidator = [
    param('machineId')
        .isInt()
        .withMessage('machine Id must be a number'),
];

module.exports = { consumptionValidator, machineIdValidator };