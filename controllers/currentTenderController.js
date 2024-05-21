const tenderService = require("../services/tenderService")

const getAllTenders = async function (req, res)
{
    const tenders = await tenderService.allTenders(queryend())
    //res.render('index', { title: 'Aktualne Przetargi' })
    if (tenders.length>0)
    {
        res.render("allTenders", {variant: "Aktualne", rows: tenders})
        //res.json(tenders)
    }
    else
    {
        res.render("noTenders", {variant: "aktywnych"})
    }
}
const getOneTender = async function (req, res)
{
    const tender = await tenderService.oneTender(req.params.id, queryend())
    //REMAKE
    res.json(tender)
}

function queryend () {
    var date = new Date()
    date=date.toISOString().slice(0,16);
    date.toString()
    query="WHERE ENDDATE > '" + date + "' AND STARTDATE < '" + date +"'"
    return query
}

module.exports={getAllTenders, getOneTender}