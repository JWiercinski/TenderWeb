const databaseConnector = require("./dbConnector")

const selectAllTenders=async(queryend) =>
{
    const query = "SELECT * FROM Tender " + queryend
    const result = await databaseConnector.dbQuerySelect(query)
    return result
}
const selectOneTender=async(id, queryend)=>
{
    const query = `SELECT * FROM Tender WHERE ID=${id} AND ` + queryend
    const result = await databaseConnector.dbQuerySelect(query)
    return result
}

module.exports={selectAllTenders, selectOneTender}