// const express = require('express');
// const router = express.Router();
// const { Forum } = require("../models"); // Assuming you have a Forum model

// // Get comments for a specific article
// router.get('/:article/comments', async (req, res) => {
//   try {
//     const forum = await Forum.findOne({
//       where: {
//         article: req.params.article
//       },
//       include: 'comments' 
//     });

//     if (!forum) {
//       res.status(404).json({ message: "Article not found." });
//     } else {
//       res.json(forum.comments);
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving comments", error });
//   }
// });

// module.exports = router;
