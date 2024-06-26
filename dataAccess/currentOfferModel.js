const databaseConnector = require("./dbConnector");
const {getDate} = require("./universalModel");
const createOffer=async(data) =>
{
    var date = await getDate()
    bugs=""
    if (data.tenderEndDate<date)
        bugs="Data zakończenia zbierania ofert minęła."
    else {
        try {
            const query = `INSERT INTO Offer (OFFERINGPARTY, VALUE, OFFERDATE, TENDERID) VALUES ("${data.offerParty}", ${data.offerValue}, "${date}", ${data.tenderId})`
            //console.log(query)
            const result = await databaseConnector.dbQueryInsert(query)
        } catch (error) {
            if (error.errno == 1264)
                bugs = "Wprowadzona kwota jest nieprawidłowa"
            else
                //console.log(error)
                bugs = "Wykryto nieznany błąd. Prosimy o kontakt z administracją serwisu"
        }
    }
    return bugs
}
module.exports={createOffer}