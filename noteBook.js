const express = require('express')
const router = express.Router()
const noteSchema = require('./noteSchema');
//feching all data;
router.get('/', async (req, res) => {
    try {
        const notes = await noteSchema.find();
        res.json(notes);

    } catch (err) {
        console.log(err);
    }
})

//fetching  by id
router.get('/:id', async (req, res) => {
    try {
        const notes = await noteSchema.findById(req.params.id)
        res.json(notes)
    } catch (err) {
        res.send(err)
    }
})

//inserting data
router.post('/', async (req, res) => {
    const notes = new noteSchema({
        note: req.body.note
    })
    try {
        const insertNote = await notes.save()
        res.json(insertNote)
    } catch (err) {
        res.send(err)
    }
})

//changing data with respect to id
router.patch('/:id', async (req, res) => {
    try {
        const notes = await noteSchema.findById(req.params.id)
        notes.note = req.body.note
        const updateNote = await notes.save()
        res.json(updateNote)
    } catch (err) {
        res.send(err)
    }
})

//change data with respect to id by put method
router.put('/:id', async(req,res)=>{
    try {
        const notes = await noteSchema.findById(req.params.id)
        notes.note = req.body.note
        const updateNote = await notes.save()
        res.json(updateNote)
    } catch (err) {
        res.send(err)
    }
})

//delete data with respect to id
router.delete('/:id', async (req, res) => {
    try {
        const notes = await noteSchema.findById(req.params.id)
        const delteNote = await notes.remove()
        res.json(delteNote)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;
