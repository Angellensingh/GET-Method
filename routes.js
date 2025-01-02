const express = require('express');
const router = express.Router();
const Model = require('./model'); 

router.get('/getAll',async(req,res) => {
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getOne/:id',async(req,res) => {
    try{
        const data = await Model.findById(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router