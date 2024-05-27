const universalModel=require("../dataAccess/universalModel")
const currentDate = async()=>
{
    const date = await universalModel.getDate()
    return date
}

module.exports={currentDate}