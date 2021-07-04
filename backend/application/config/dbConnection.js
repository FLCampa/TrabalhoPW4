const mysql2 = require('mysql2');

const connection = () => {
    return mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '358900',
        database: 'trabalhoPw4'
    })
}

module.exports = () => {
    return connection;
}