const express = require('express');
const routerMhs = express.Router();
const connection = require('../db/db')
const ctrMhs = require('../controllers/mahasiswa')

routerMhs.post('/belajar', ctrMhs.create)
routerMhs.get('/belajar', ctrMhs.getMhs)
routerMhs.get('/belajar/:nim', ctrMhs.getMhsByNim)
routerMhs.put('/belajar/:nim', ctrMhs.update)
routerMhs.delete('/belajar/:nim', ctrMhs.delete)

module.exports = routerMhs;