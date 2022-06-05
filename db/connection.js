const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;

// MySQL information
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'perkins2287',
    database: 'employee_db'
});

module.exports = db;