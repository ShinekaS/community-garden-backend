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
  const { firstName, lastName, userName, password, phoneNumber, city, state, zipcode, email, garden } = req.body
  try{
    const user = await User.create({ firstName, lastName, userName, password, phoneNumber, city, state, zipcode, email, garden })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({message: "Error creating user"})
  }
})

//Update a user to add garden by id
router.put("/:id", async (req, res) => {
  const { garden } = req.body;

  try {
    const newUser = {};
    if (garden !== undefined) {
      newUser.garden = garden;
    }
  
    const [updated] = await User.update(newUser, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user's garden", error });
  }
});



module.exports = router;
