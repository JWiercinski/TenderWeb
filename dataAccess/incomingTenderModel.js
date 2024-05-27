const databaseConnector = require("./dbConnector");
const {getDate} = require("./universalModel");
const createTender=async(data) =>
{
    var date = await getDate()
    //console.log(date>data.tenderEndDate, data.tenderEndDate, date)
    //console.log(data.tenderEndDate<date, data.tenderStartDate>data.tenderEndDate, data.tenderStartDate<date)
    bugs=""
    if (data.tenderEndDate<data.tenderStartDate)
        bugs= bugs + "Przetarg nie może zakończyć się przed rozpoczęciem. "
    if (data.tenderEndDate<date)
        bugs= bugs + "Nowy przetarg nie może zakończyć się w przeszłości. "
    if (data.tenderStartDate<date)
        bugs= bugs + "Nowy przetarg nie może rozpocząć się w przeszłości. "
    //console.log(bugs.length)
    if (bugs.length==0) {
        try {
            const query = `INSERT INTO Tender (NAME, DETAILS, ISSUER, MAXBUDGET, STARTDATE, ENDDATE) VALUES ("${data.tenderName}", "${data.tenderDetails}", "${data.tenderIssuer}", ${data.tenderBudget}, "${data.tenderStartDate}", "${data.tenderEndDate}")`
            const result = await databaseConnector.dbQueryInsert(query)
        }
        catch (error){
            if (error.errno==1264)
                bugs="Wprowadzone dane daty bądź maksymalnego budżetu są nieprawidłowe"
            else
                //console.log(error)
                bugs="Wykryto nieznany błąd. Prosimy o kontakt z administracją serwisu"
        }
    }
    return bugs
}
module.exports={createTender}