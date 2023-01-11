const express = require('express');
const router = express.Router();

// getting all methods from controller
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categories');

router.get('/' , getAllCategories);
router.post('/' , createCategory);
router.patch('/:categoriesId' , updateCategory);
router.delete('/:categoriesId' , deleteCategory);


module.exports = router;
