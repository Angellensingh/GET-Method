const express = require('express');
const router = express.Router();
const Model = require('./model'); 

router.post('/post', async (req, res) => {

    const data = new Model({
        name: req.body.name,
        email: req.body.email
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } 
    catch (error) {
        console.error('Error saving data:', error);
        res.status(400).json({ message: error.message });
    }
});

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