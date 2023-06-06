var express = require('express');
var router = express.Router();

const { Plant } = require('../models')

//View all the plants
router.get('/',async (req,res) => {
    try{
        const plants = await Plant.findAll();
        res.json(plants);
    } catch (error) {
        res.status(500).json({message: "Error retrieving plants", error})
    }
    
})

//View a specific plant by name

module.exports = router;