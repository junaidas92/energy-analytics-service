const energyMock = require('../mock/energy.mock');

const getEnergyConsumption = async(machineIds, startDate, endDate) => {
    if(!machineIds || !Array.isArray(machineIds) || machineIds.length === 0){
        const error = new error('Atleast one machineid is required');
        error.statuscode = 400;
        throw error;
    }
    if (!startDate || !endDate) {
        const error = new error('startDate and endDate are required')
        error.statuscode = 400;
        throw error;
    }

    return energyMock.getConsumptionData(machineIds, startDate, endDate)
} 

const getMachineEnergyData = async(machineId) => {
    if(!machineId) {
        const error = new error('Machine Id is required');
        error.statuscode = 400;
        throw error;
    }

    return energyMock.getMachineData(machineId)
}

module.exports = { getEnergyConsumption, getMachineEnergyData }
