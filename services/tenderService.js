const tenderModel = require("../dataAccess/tenderModel")

const allTenders = async(queryend)=>
{
    const tenders = await tenderModel.selectAllTenders(queryend)
    return tenders
}
const oneTender = async(id, queryend) =>
{
    const tender = await tenderModel.selectOneTender(id, queryend)
    return tender
}

module.exports={allTenders, oneTender}