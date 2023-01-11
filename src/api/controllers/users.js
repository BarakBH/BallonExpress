module.exports = {
  signUp : (req, res) => {
    res.status(200).json({
      message: "sign up"
    })
  },
  login : (req, res) => {
    res.status(200).json({
      message: "login"
    })
  },
}
