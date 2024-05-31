const pool = require('../config/db.js');

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE EMAIL = $1'
  const value = [email]
  const {rows} = await pool.query(query, value)
  return rows[0]
};

const addUser = async ({email, password, role}) => {
  const query = 'INSERT INTO users (email, password, role) VALUES($1, $2, $3) RETURNING *'
  const values = [email, password, role]
  const {rows} = await pool.query(query, values)
  return rows[0]
};

module.exports = {
  getUserByEmail,
  addUser,
};
