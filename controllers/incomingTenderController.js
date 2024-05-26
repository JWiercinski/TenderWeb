const tenderService = require("../services/tenderService");
const incomingTenderService = require("../services/incomingTenderService")

const getAllTenders = async function (req, res)
{
    const tenders = await tenderService.allTenders(queryend())
    if (tenders.length>0)
    {
        res.render("allTenders", {variant: "Nadchodzące", rows: tenders})
    }
    else
    {
        res.render("noTenders", {variant: "nadchodzących"})
    }
}

const getOneTender = async function (req, res)
{
    try {
        const tender = await tenderService.oneTender(req.params.id, queryend())
        res.render("singleTender", {data: tender[0], status: "Nadchodzący"})
    }
    catch (error) {
        res.render("error", {error: error})
    }
}

const renderCreationForm = async function (req, res)
{
    res.render('newTender', { title: 'Zainicjuj przetarg' });
}

const createTender = async function (req, res)
{
    const bugs = await incomingTenderService.addTender(req.body)
    if (bugs.length>0)
        res.render("badCreation", {variant: "przetargu", problems: bugs})
    else
        res.render("okCreation", {variant: "przetargu"})
}

function queryend () {
    var date = new Date()
    date=date.toISOString().slice(0,16);
    date.toString()
    query="WHERE STARTDATE > '" + date + "'"
    return query
}

module.exports={getAllTenders, renderCreationForm, createTender, getOneTender}