var express = require('express');
var router = express.Router();
const { Forum } = require("../models")

// Get all Articles
router.get("/", async (req, res) => {
    try {
      const articles = await Forum.findAll(); // how can we include the ITEMS associated with the baskets in this response?
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving Articles", error });
    }
  });

// Post Articles
router.post("/", async (req, res) => {
    const { article, content } = req.body;
    try {
      const articles = await Forum.create({ article, content });
      res.status(201).json(articles);
    } catch (error) {
      res.status(500).json({ message: "Error creating article", error });
    }
  });

//View a specific article by name
router.get('/:article', async (req,res) => {
    try{
        const article = await Forum.findAll(
            {
                where: {
                    name:(req.params.article)
                }

            }
        )
        if(!article) {
            res.status(404).json({message: "Article not found."})
        } else{
            res.json(article)
        }
    } catch (error) {
        res.status(500).json({message: "Article retrieving plant", error})
    }
})

  // Update a article by ID
router.put("/:id", async (req, res) => {
    const { article, content } = req.body;
  
    try {
      const newArticile = {};
      if (article !== undefined) {
        newArticile.article = article;
      }
      if (content !== undefined) {
        newArticile.content = content;
      }
      const [updated] = await Article.update(newArticile, {
        where: { id: req.params.id },
      });
  
      if (updated) {
        const updatedArticle = await Article.findByPk(req.params.id);
        res.json(updatedArticle);
      } else {
        res.status(404).json({ message: "article not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating article", error });
    }
  });

  // Delete a article by ID
router.delete("/:id", async (req, res) => {
    try {
      const deleted = await Article.destroy({
        where: { id: req.params.id },
      });
  
      if (deleted) {
        res.status(204).json({ message: "Article deleted" });
      } else {
        res.status(404).json({ message: "Article not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting article", error });
    }
  });

module.exports = router;