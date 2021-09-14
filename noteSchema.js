const mongoose = require('mongoose')


const notes = new mongoose.Schema({
    note: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('noteSchema',notes)