const connection = require('..//db/db')

module.exports ={
    getMhs: (req, res) =>{

        const qstring = "SELECT * FROM tutor"
    
        connection.query(qstring ,(err, data) => {
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat insert get"
                });
            }
                res.send(data)
        });
    },
    getMhsByNim : (req, res) =>{

        const qstring = `SELECT * FROM tutor WHERE nim = '${req.params.nim}'`;
    
        connection.query(qstring ,(err, data) => {
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat insert get"
                });
            }
                res.send(data)
        });
    },
    update: (req, res) => {
        const nim = req.params.nim;
        const bljr = req.body;
        const qstring = `UPDATE tutor 
                        SET nama = '${bljr.nama}', angkatan = '${bljr.angkatan}', prodi = '${bljr.prodi}'
                        WHERE nim = '${nim}'`
        connection.query(qstring, (err,data) => {
            if(err) {
                res.status(500).send({
                    message: "ERROR updating belajar with NIM " + nim 
                });
            }
            else if(data.affectedRows == 0){
                res.status(404).send({
                    message: `NOT found belajar with NIM ${nim}`
                });
            }
            else {
                console.log("update belajar: ", {nim: nim, ...bljr});
                res.send({nim: nim, ...bljr})
            }
        });
    },
    create: (req, res) =>{

        const belajardulu = req.body
    
        connection.query("INSERT INTO tutor set ?", belajardulu,(err) => {
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat insert data"
                });
            }
            else 
                res.send(req.body)
        });
    },
    delete: (req, res) =>{
        const nim = req.params.nim;
        const qstring = `DELETE FROM tutor WHERE nim = '${nim}'`
    
        connection.query(qstring ,(err, data) => {
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message : err.message || "ERROR hapus tutor with nim ${nim}" + nim
                });
            }
            else if(data.affectedRows ==0){
                res.status(404).send({
                    message: ` NOT found tutor with nim ${nim}`
                })
            }
            else res.send(`belajar dengan nim = ${nim} telah terhapus`)
        });
    }
}