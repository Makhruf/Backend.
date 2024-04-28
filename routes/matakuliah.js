const express = require('express');
const routerMk = express.Router();
const connection = require('../db/db')

routerMk.get ('/matakulih', (req, res) => {
    connection.query ('SELECT * FROM matakuliah', (error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

routerMk.get('/matakuliah/:KdMk', (req, res)=> {
    const KdMk = req.params.KdMk;
    connection.query('SELECT * FROM matkuliah where KdMk = ?', [KdMk], (error, result)=>{
        if (error) throw error;
        res.json(result);
    });
});

routerMk.post('matakuliah',(req, res)=>{
    const matkul = req.body;
    connection.query("INSERT INTO matakuliah set ?", matkul,(err)=>{
      if (err){
        console.log("error:", err);
        res.status(500).send({
            message : err.message || "Terjadi kesalahan data"
        });
      }
      else
        res.send(req.body)  
    });

});

module.exports = routerMk;
