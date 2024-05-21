const tenderService = require("../services/tenderService");
const incomingTenderService = require("../services/incomingTenderService")

const getAllTenders = async function (req, res)
{
    const tenders = await tenderService.allTenders(queryend())
    //res.render('index', { title: 'Aktualne Przetargi' })
    if (tenders.length>0)
    {
        res.render("allTenders", {variant: "Nadchodzące", rows: tenders})
        //res.json(tenders)
    }
    else
    {
        res.render("noTenders", {variant: "nadchodzących"})
    }
}

const renderCreationForm = async function (req, res)
{
    res.render('newTender', { title: 'Zainicjuj przetarg' });
}

const createTender = async function (req, res)
{
    console.log(req.body)
    const bugs = await incomingTenderService.addTender(req.body)
    if (bugs.length>0)
        res.render("badCreation", {variant: "oferty", problems: bugs})
    else
        res.json(bugs)
}

function queryend () {
    var date = new Date()
    date=date.toISOString().slice(0,16);
    date.toString()
    query="WHERE ENDDATE > '" + date + "' AND STARTDATE > '" + date +"'"
    return query
}

module.exports={getAllTenders, renderCreationForm, createTender}