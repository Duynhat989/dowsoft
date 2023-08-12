const mysql = require('mysql');
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'vinhcity_vietduy989',
    password: 'JHxS0qb{z[%7',
    database: 'vinhcity_base'
});
dbConn.connect()
module.exports = {
    dbConn
}