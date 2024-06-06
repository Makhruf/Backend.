const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
    nim: {
        type: String,
        required: true // This is the correct way to set 'required'
    },
    nama: {
        type: String,
        required: true // This is the correct way to set 'required'
    },
    angkatan: {
        type: Number,
        required: true // This is the correct way to set 'required'
    },
    prodi: {
        type: String,
        required: true // This is the correct way to set 'required'
    },
});

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema);
