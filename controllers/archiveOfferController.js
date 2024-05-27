const tenderService = require("../services/tenderService")
const archiveOfferService = require("../services/archiveOfferService")

const getOffers = async function (req, res)
{
    query="WHERE 1=1 "
    try {
        const tender = await tenderService.oneTender(req.params.tid, query)
        var tender0 = tender[0]
        const offers = await archiveOfferService.getOffers(tender0)
        res.render("tenderOffers", {tender: tender0, offers: offers})
    }
    catch (error) {
        res.render("error", {error: error})
    }
}

module.exports={getOffers}