const getConsumptionData = (machineIds, startDate, endDate) => {
    return machineIds.map(id =>({
        machineId: id,
        startDate,
        endDate,
        energy_consumed: parseFloat((Math.random()*100).toFixed(2)),
        unit: 'KWH'
    }));
}

const getMachineData = (machineId) => {
    return {
        machineId,
        energy_consumed: parseFloat((Math.random()*100).toFixed(2)),
        last_updated: new Date().toISOString(),
        unit: 'KWH'
    };
}

module.exports = { getConsumptionData, getMachineData }