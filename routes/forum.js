const express = require('express');
const router = express.Router();
const { Forum } = require("../models");

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Forum.findAll();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving articles", error });
  }
});

// Post an article
router.post("/", async (req, res) => {
  const { article, content } = req.body;
  try {
    const createdArticle = await Forum.create({ article, content });
    res.status(201).json(createdArticle);
  } catch (error) {
    res.status(500).json({ message: "Error creating article", error });
  }
});

// Get a specific article by name
router.get('/:article', async (req, res) => {
  try {
    const article = await Forum.findOne({
      where: {
        article: req.params.article
      }
    });

    if (!article) {
      res.status(404).json({ message: "Article not found." });
    } else {
      res.json(article);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving article", error });
  }
});

// Update an article by ID
router.put("/:id", async (req, res) => {
  const { article, content } = req.body;

  try {
    const updatedArticle = await Forum.findByPk(req.params.id);

    if (!updatedArticle) {
      res.status(404).json({ message: "Article not found." });
      return;
    }

    updatedArticle.article = article;
    updatedArticle.content = content;
    await updatedArticle.save();

    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error updating article", error });
  }
});

// Delete an article by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Forum.destroy({
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
