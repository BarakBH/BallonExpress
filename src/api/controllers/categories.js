module.exports = {
  getAllCategories : (req, res) => {
    res.status(200).json({
      message: "Get All Categories"
    })
  },
  createCategory : (req, res) => {
    res.status(200).json({
      message: "Created a new Categorie"
    })
  },
  updateCategory : (req, res) => {
    const categoriesId = req.params.categoriesId;

    res.status(200).json({
      message: `Updated Categorie - ${categoriesId}`
    })
  },
  deleteCategory : (req, res) => {
    const categoriesId = req.params.categoriesId;

    res.status(200).json({
      message: `Delete Categorie - ${categoriesId}`
    })
  },
}
