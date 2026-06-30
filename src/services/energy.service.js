//const energyMock = require('../mock/energy.mock');
const energyRepository = require('../repository/energy.repository');
const redis = require('../cache/redis');

const CACHE_TTL = 60; 

const getEnergyConsumption = async(machineIds, startDate, endDate) => {
    if(!machineIds || !Array.isArray(machineIds) || machineIds.length === 0){
        const error = new Error('Atleast one machineid is required');
        error.statusCode = 400;
        throw error;
    }
    if (!startDate || !endDate) {
        const error = new Error('startDate and endDate are required')
        error.statusCode = 400;
        throw error;
    }

    const cacheKey = `energy:consumption:${machineIds.join(',')}:${startDate}:${endDate}`;

    const cached = await redis.get(cacheKey);
    if (cached){
        console.log('Cache hit: ', cacheKey)
        return JSON.parse(cached)
    }

    console.log('Cache miss:',  cacheKey)
    //const data =  energyMock.getConsumptionData(machineIds, startDate, endDate)
    const data =  energyRepository.getConsumptionData(machineIds, startDate, endDate);


    await redis.setex(cacheKey, CACHE_TTL, JSON.stringify(data));

    return data
}
    
const getMachineEnergyData = async(machineId) => {
    if(!machineId) {
        const error = new Error('Machine Id is required');
        error.statusCode = 400;
        throw error;
    }

    const cacheKey = `energy:machine:${machineId}`;

    const cached = await redis.get(cacheKey);
    if (cached) {
        console.log('Cache hit: ', cacheKey)
        return JSON.parse(cached)
    }

    console.log('Cache miss: ', cacheKey);
    //const data = energyMock.getMachineData(machineId);
    const data = energyRepository.getMachineEnergyData(machineId);
    await redis.setex(cacheKey, CACHE_TTL, JSON.stringify(data));

    return data;

}

module.exports = { getEnergyConsumption, getMachineEnergyData }
