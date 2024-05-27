const tenderService = require("../services/tenderService")

const getAllTenders = async function (req, res)
{
    const tenders = await tenderService.allTenders(queryend())
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
        const tender = await tenderService.oneTender(req.params.id, queryend())
        res.render("singleTender", {data: tender[0], status: "Aktywny"})
    }
    catch (error) {
        res.render("error", {error: error})
    }
}

function queryend () {
    var date = new Date()
    date=date.toISOString().slice(0,16);
    date.toString()
    console.log(date)
    query="WHERE ENDDATE > '" + date + "' AND STARTDATE <= '" + date +"'"
    return query
}

module.exports={getAllTenders, getOneTender}