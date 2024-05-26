const tenderService = require("../services/tenderService")

const getAllTenders = async function (req, res)
{
    const tenders = await tenderService.allTenders(queryend())
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
        const tender = await tenderService.oneTender(req.params.id, queryend())
        res.render("singleTender", {data: tender[0], status: "Archiwalny"})
    }
    catch (error) {
        res.render("error", {error: error})
    }
}

function queryend () {
    var date = new Date()
    date=date.toISOString().slice(0,16);
    date.toString()
    query="WHERE ENDDATE < '" + date + "'"
    return query
}

module.exports={getAllTenders, getOneTender}