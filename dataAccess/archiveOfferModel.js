const databaseConnector = require("./dbConnector")
const {getDate} = require("./universalModel");

const selectOffers=async(data)=>
{
    var date = await getDate()
    var result=[]
    console.log(data.ENDDATE, date)
    if (data.ENDDATE.toISOString().slice(0,16) < date) {
        const query = `SELECT * FROM Offer WHERE TENDERID=${data.ID} AND VALUE<${data.MAXBUDGET} ORDER BY VALUE ASC`
        result = await databaseConnector.dbQuerySelect(query)
        console.log(result)
    }
    console.log(result)
    return result
}

module.exports={selectOffers}