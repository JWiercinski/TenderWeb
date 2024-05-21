const incomingTenderModel = require("../dataAccess/incomingTenderModel")

const addTender = async(data) =>
{
    const bugs = await incomingTenderModel.createTender(data)
    return bugs
}

module.exports={addTender}