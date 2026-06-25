const energyService = require('../services/energy.service');

const getEnergyConsumption = async(req, res) => {
    try {
        const { machineIds, startDate, endDate } = req.body;
        const data = await energyService.getEnergyConsumption(machineIds, startDate, endDate);
        return res.status(200).json({success: true, data});
    }
    catch (error) {
        return res.status(error.statusCode || 500).json({message: error.message });
    }
}

const getMachineEnergyData = async(req, res) =>{
    try {
        const  machineId  = req.params.machineId;
        const data = await energyService.getMachineEnergyData(Number(machineId));
        return res.status(200).json({success: true, data});
    }
    catch(error) {
        return res.status(error.statusCode || 500).json({message: error.message });
    }
}

module.exports = {getEnergyConsumption, getMachineEnergyData}