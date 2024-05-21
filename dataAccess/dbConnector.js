require('dotenv').config()
const mysql = require("mysql2/promise")
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

const dbQuerySelect = async (query) => {
    let r = {};
    try {
        const [rows] = await pool.query(query);
        r=rows;
    } catch (err) {
        console.error(err);
    }
    return r;
}
const dbQueryInsert = async (query) =>{
    const result=await pool.query(query)
    return result
}
module.exports={dbQuerySelect, dbQueryInsert}