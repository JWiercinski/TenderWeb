const archiveOfferModel = require("../dataAccess/archiveOfferModel");
const getOffers = async(data) =>
{
    const offers = await archiveOfferModel.selectOffers(data)
    return offers
}

module.exports={getOffers}