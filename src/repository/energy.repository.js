const knex = require('../db/knex');

const getMachineEnergyData = async (machineId) =>{
    return await knex('machine_energy')
        .where({machine_id: machineId})
        .orderBy('recorded_at', 'desc')
}

const getEnergyConsumption = async (machineIds, startDate, endDate) => {
    return await knex('machine_energy')
        .whereIn({machine_id: machineIds})
        .whereBetween('recorded_at', [startDate, endDate])
        .orderBy('recorded_at', 'desc')
}

module.exports = { getMachineEnergyData, getEnergyConsumption };