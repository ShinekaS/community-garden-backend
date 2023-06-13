var express = require('express');
var router = express.Router();

const { Garden } = require('../models')

//View all the gardens
router.get('/',async (req,res) => {
    try{
        const gardens = await Garden.findAll();
        res.json(gardens);
    } catch (error) {
        res.status(500).json({message: "Error retrieving gardens", error})
    }
    
})
//get gardens by city
router.get('/:city', async (req,res) => {
    try{
        const gardens = await Garden.findAll(
            {
                where: {
                    city:(req.params.city.toLowerCase())
                }

            }
        )
        if(!gardens) {
            res.status(404).json({message: "Gardens not found for that city."})
        } else{
            res.json(gardens)
        }
    } catch (error) {
        res.status(500).json({message: "Error retrieving gardens", error})
    }
})
