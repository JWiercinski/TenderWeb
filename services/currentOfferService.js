const currentOfferModel = require("../dataAccess/currentOfferModel")

const addOffer = async(data) =>
{
    const bugs = await currentOfferModel.createOffer(data)
    return bugs
}

module.exports={addOffer}