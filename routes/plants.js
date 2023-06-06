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
router.get('/:name', async (req,res) => {
    try{
        const plant = await Plant.findAll(
            {
                where: {
                    name:(req.params.name)
                }

            }
        )
        if(!plant) {
            res.status(404).json({message: "Plant not found."})
        } else{
            res.json(plant)
        }
    } catch (error) {
        res.status(500).json({message: "Error retrieving plant", error})
    }
})

//View a specific plants by season
router.get('/season/:season', async (req,res) => {
    try{
        const plants = await Plant.findAll(
            {
                where: {
                    season:(req.params.season)
                }

            }
        )
        if(!plants) {
            res.status(404).json({message: "Plants not found for season specified."})
        } else{
            res.json(plants)
        }
    } catch (error) {
        res.status(500).json({message: "Error retrieving plants", error})
    }
})

module.exports = router;