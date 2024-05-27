const tenderService = require("../services/tenderService")
const universalService=require("../services/universalService")

const getAllTenders = async function (req, res)
{
    const date = await universalService.currentDate()
    const tenders = await tenderService.allTenders(queryend(date))
    if (tenders.length>0)
    {
        res.render("allTenders", {variant: "Archiwalne", rows: tenders})
    }
    else
    {
        res.render("noTenders", {variant: "archiwalnych"})
    }
}
const getOneTender = async function (req, res)
{
    try {
        const date = await universalService.currentDate()
        const tender = await tenderService.oneTender(req.params.id, queryend(date))
        res.render("singleTender", {data: tender[0], status: "Archiwalny"})
    }
    catch (error) {
        res.render("error", {error: error})
    }
}

function queryend (date) {
    query="WHERE ENDDATE < '" + date + "'"
    return query
}

module.exports={getAllTenders, getOneTender}