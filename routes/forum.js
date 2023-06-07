var express = require('express');
var router = express.Router();


// Get all Articles, including associated items
router.get("/", async (req, res) => {
    try {
      const articles = await Articles.findAll(); // how can we include the ITEMS associated with the baskets in this response?
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving baskets", error });
    }
  });