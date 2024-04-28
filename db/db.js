const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'belajar'
});
connection.connect(error => {
    if (error) throw error;
    console.log("sukses masuk didatabase.");
});

module.exports = connection;