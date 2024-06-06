const pool = require('../config/db.js');

const addSponsor = async ({name, runner, card, cardNumber, num1, num2, CVC, donation}) => {
    const query = 
    'INSERT INTO sponsors (name, runner, card, card_number, expiry_month, expiry_year, cvc, donation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const values = [name, runner, card, cardNumber, num1, num2, CVC, donation];
    const {rows} = await pool.query(query, values);
    return rows[0];
};

const getSponsorById = async (id) => {
    const query = 'SELECT * FROM sponsors WHERE id = $1';
    const values = [id];
    const {rows} = await pool.query(query, values);
    return rows[0];
};

module.exports = {
    addSponsor,
    getSponsorById
};
