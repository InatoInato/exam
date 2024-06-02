const pool = require('../config/db.js');

const addRunner = async ({email, password, name, lastname, gender, photoPath, birth, country}) => {
    const query = 
    'INSERT INTO runner (email, password, name, lastname, gender, photoPath, birth, country) VALUES'+ 
    '($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
    const values = [email, password, name, lastname, gender, photoPath, birth, country]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

const getRunnerByEmail = async (email) => {
    const query = 'SELECT * FROM runner WHERE email = $1'
    const values = [email]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

module.exports = {
    addRunner, getRunnerByEmail
}