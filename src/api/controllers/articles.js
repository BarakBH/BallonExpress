module.exports = {
  getAllArticles : (req, res) => {
    res.status(200).json({
      message: "Get All Articles"
    })
  },
  createArticle : (req, res) => {
    res.status(200).json({
      message: "Created a new article"
    })
  },
  updateArticle : (req, res) => {
    const articleId = req.params.articlesId;

    res.status(200).json({
      message: `Updated article - ${articleId}`
    })
  },
  deleteArticle : (req, res) => {
    const articleId = req.params.articlesId;

    res.status(200).json({
      message: `Delete article - ${articleId}`
    })
  },
}
