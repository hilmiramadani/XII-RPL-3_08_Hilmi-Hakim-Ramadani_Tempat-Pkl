const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    namaPerusahaan: {
        type: String,
        require: [true, 'Silahkan isikan nama perusahaan'],
        unique: true
    },
    lokasi: {
        type: String,
        require: [true, 'Silahkan isi lokasi perusahaan']
    },
    noTelepon: {
        type: String,
        unique: true
    },
    kuotaMagang: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isikan email valid!']
    }
})

module.exports = mongoose.model('TempatPkl', UserSchema)