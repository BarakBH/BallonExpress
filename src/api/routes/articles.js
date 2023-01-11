const express = require('express');
const router = express.Router();

// getting all methods from controller
const {
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle
} = require('../controllers/articles');

router.get('/' , getAllArticles);
router.post('/' , createArticle);
router.patch('/:articlesId' , updateArticle);
router.delete('/:articlesId' , deleteArticle);


module.exports = router;
