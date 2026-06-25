const express = require('express');
const router = express.Router()
const energyController = require('../controllers/energy.controller');
const validate = require('../middlewares/validate.middleware');
const { consumptionValidator, machineIdValidator } = require('../validators/energy.validator');


// router.post('/consumption', energyController.getEnergyConsumption);
// router.get('/machine/:machineId', energyController.getMachineEnergyData);
router.post('/consumption', consumptionValidator, validate, energyController.getEnergyConsumption);
router.get('/machine/:machineId', machineIdValidator, validate, energyController.getMachineEnergyData);

router.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

module.exports = router;