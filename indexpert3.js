const express = require('express');
const app = express();
const port = 5000;

// pertemuan 3
app.use(express.json()), // Mengambil body berupa json

app.post('/mahasiswa', (req, res) => {
    const nim = req.body.nim;
    const nama = req.body.nama;


    const msg = {   status:"Sukses",
                    data:{"nim" : nim, "nama" : nama}};

    res.send(msg);
});

//pertemuan 3
app.get('/mahasiswa',(req, res)=>{

    res.json(mahasiswa)
});


app.get('/get-mahasiswa-by-nim', (req, res) =>{
   const nim = req.query.nim;

   res.send(`Mahasiswa dengan nim : ${nim} ditemukan`)
});

app.get('/nilai-persemester',(req, res) => {
   const nim = req.query.nim;
   const semester = req.query.semester;

   res.send(`Nilai mahasiswa nim : ${nim} semester ${semester} ditemukan`)
})

// req.params dengan 1 parameter
app.get('/mahasiswa/:nim', (req, res) => {
   const nim = req.params.nim;

   res.send(`Mahasiswa dengan nim : ${nim} ditemukan` )
});

// req.params dengan 2 parameter
app.get('/nilai/:nim/:semester',(req, res)=> {
   const nim = req.params.nim;
   const semester = req.params.semester;

   res.send(`Nilai mahasiswa nim : ${nim} semester ${semester} ditemukan`)
});

app.listen(port, ()=> {
    console.log(`server berjalan dengan localhost:${port}`)
});