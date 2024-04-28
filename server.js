const express = require('express');
const app= express();
const routerMhs = require('./routes/mahasiswa');
const routerMk = require('./routes/matakuliah')
const port = 3000;

// untuk menerima req body
app.use(express.json());
app.use(routerMhs)
app.use(routerMk)


app.listen(port, () =>{
    console.log(`server berjalan dengan localhost:${port}`)
});

