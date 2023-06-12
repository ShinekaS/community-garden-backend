var express = require('express');
var router = express.Router();
const { User } = require('../models')

//View all the users
router.get('/',async (req,res) => {
  try{
      const users = await User.findAll();
      res.json(users);
  } catch (error) {
      res.status(500).json({message: "Error retrieving users", error})
  }
  
})

//Add a new user
router.post('/', async (req,res) => {
  const { firstName, lastName, userName, password, phoneNumber, city, state, zipcode, email } = req.body
  try{
    const user = await User.create({ firstName, lastName, userName, password, phoneNumber, city, state, zipcode, email })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({message: "Error creating user"})
  }
})



module.exports = router;
