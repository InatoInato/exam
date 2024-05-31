const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'marathon',
    password: 'postgres',
    port: 5432,
})

pool.on('error', (error) => {
    console.error('db error',error)
    process.exit(-1)
})

module.exports = pool