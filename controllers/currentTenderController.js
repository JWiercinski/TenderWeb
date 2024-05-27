const tenderService = require("../services/tenderService")
const universalService = require("../services/universalService")

const getAllTenders = async function (req, res)
{
    const date = await universalService.currentDate()
    const tenders = await tenderService.allTenders(queryend(date))
    //res.render('index', { title: 'Aktualne Przetargi' })
    if (tenders.length>0)
    {
        res.render("allTenders", {variant: "Aktywne", rows: tenders})
        //res.json(tenders)
    }
    else
    {
        res.render("noTenders", {variant: "aktywnych"})
    }
}
const getOneTender = async function (req, res)
{
    try {
        const date = await universalService.currentDate()
        const tender = await tenderService.oneTender(req.params.id, queryend(date))
        res.render("singleTender", {data: tender[0], status: "Aktywny"})
    }
    catch (error) {
        res.render("error", {error: error})
    }
}

function queryend (date) {
    query="WHERE ENDDATE > '" + date + "' AND STARTDATE <= '" + date +"'"
    return query
}

module.exports={getAllTenders, getOneTender}