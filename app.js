const express=require('express')
const app=express();
const mongoose=require('mongoose')
const url = 'mongodb://localhost/noteBooks'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected........')
})
app.use(express.json())
const notebook = require('./noteBook')
app.use('/notes',notebook)

app.listen(9000, () => {
    console.log('Server started...')
}) 