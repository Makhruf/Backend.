const connection = require('../db/db')

module.exports = {
    getNilaiByNim : (req, res) => {
        const qstring = `SELECT matakuliah.kdmk, matakuliah.matakuliah, nilai.dosen,
                            matakuliah.sks, nilai.semester, nilai.nilai
                        FROM nilai
                        INNER JOIN matakuliah
                        ON nilai.kdmk = matakuliah.kdmk
                        WHERE nilai.nim = ${req.params.nim};`;
        connection.query(qstring, (err,data) =>{
            if(err) {
                console.log("error : " , err);
                res.status(500).send({
                    message : err.message || "terjadi error saat get data"
                })
            }
        else res.send(data)
        })
    },

    getNilaiByNimSemester : (req, res) => {
        const qstring = `SELECT matakuliah.kdmk, matakuliah.matakuliah, nilai.dosen,
                            matakuliah.sks, nilai.semester, nilai.nilai
                        FROM nilai
                        INNER JOIN matakuliah
                        ON nilai.kdmk = matakuliah.kdmk
                        WHERE nilai.nim = ${req.params.nim} AND nilai.semester = ${req.params.semester};`;
        connection.query(qstring, (err, data) => {
            if (err) {
                console.log("error : ", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat get data"
                });
            }
            else res.send(data)
        })
    },

    addNilai: (req, res) => {
        const { nim, kdmk, semester, dosen, nilai } = req.body;
        const qstring = `INSERT INTO nilai (nim, kdmk, semester, dosen, nilai)
                         VALUES (?, ?, ?, ?, ?);`;
        const values = [nim, kdmk, semester, dosen, nilai];
        
        connection.query(qstring, values, (err, data) => {
            if (err) {
                console.log("error : ", err);
                res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat menambahkan data"
                });
            } else {
                res.send({
                    message: "Data berhasil ditambahkan",
                    data: data
                });
            }
        });
    },

    updateNilai: (req, res) => {
        const { nim, kdmk, semester, dosen, nilai } = req.body;
        const qstring = `UPDATE nilai
                         SET dosen = ?, nilai = ?
                         WHERE nim = ? AND kdmk = ? AND semester = ?;`;
        const values = [dosen, nilai, nim, kdmk, semester];
        
        connection.query(qstring, values, (err, data) => {
            if (err) {
                console.log("error : ", err);
                res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat memperbarui data"
                });
            } else {
                res.send({
                    message: "Data berhasil diperbarui",
                    data: data
                });
            }
        });
    },    
    
    deleteNilai: (req, res) => {
    const { nim, kdmk, semester } = req.body;
    const qstring = `DELETE FROM nilai WHERE nim = ? AND kdmk = ? AND semester = ?;`;
    const values = [nim, kdmk, semester];
    
    connection.query(qstring, values, (err, data) => {
        if (err) {
            console.log("error : ", err);
            res.status(500).send({
                message: err.message || "Terjadi kesalahan saat menghapus data"
            });
        } else {
            res.send({
                message: "Data berhasil dihapus",
                data: data
            });
        }
    });
},

}