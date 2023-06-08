const express = require('express');
const router = express.Router();
const { Article } = require('../models')


// Read all articles
router.get('/', async (req, res) => {
    try {
      const articles = await Article.findAll();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve articles' });
    }
  });

  // Read a single article by ID
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const article = await Article.findByPk(id);
      if (article) {
        res.json(article);
      } else {
        res.status(404).json({ error: 'Article not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve the article' });
    }
  });
  
  // Update an article by ID
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { title, image, link } = req.body;
      const article = await Article.findByPk(id);
      if (article) {
        await article.update({ title, image, link });
        res.json(article);
      } else {
        res.status(404).json({ error: 'Article not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update the article' });
    }
  });
  
  // Delete an article by ID
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const article = await Article.findByPk(id);
      if (article) {
        await article.destroy();
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Article not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete the article' });
    }
  });
  
  module.exports = router;