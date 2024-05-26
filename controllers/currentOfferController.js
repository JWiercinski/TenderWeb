const tenderService = require("../services/tenderService");
const currentOfferService = require("../services/currentOfferService")
const createOffer = async function (req, res)
{
    const bugs= await currentOfferService.addOffer(req.body)
    if (bugs.length>0)
        res.render("badCreation", {variant: "oferty", problems: bugs})
    else
        res.render("okCreation", {variant: "oferty"})
}

const renderForm = async function (req, res)
{
    queryend="WHERE 1=1 "
    try {
        const tender = await tenderService.oneTender(req.params.tid, queryend)
        res.render("newOffer", {tender: tender[0]})
    }
    catch (error) {
        res.render("error", {error: error})
    }
}

module.exports={createOffer, renderForm}