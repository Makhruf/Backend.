const mysql = require("mysql2");

// koneksi mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'mahasiswa'
});
connection.connect(error => {
    if (error) throw error;
    console.log("sukses ke database.");
});
module.exports = connection;