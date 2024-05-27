const getDate= async() =>
{
    var date = new Date()
    date=date.toISOString().slice(0,16);
    return date
}

module.exports={getDate}