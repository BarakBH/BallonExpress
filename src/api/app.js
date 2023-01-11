const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@articlesapi.j1pmeai.mongodb.net/?retryWrites=true&w=majority` , {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.on('connected' , () => {
  console.log("Connected to mongoDB !");
});

// importing routes
const articlesRoutes = require('./routes/articles');
const categoriesRoutes = require('./routes/categories');
const usersRoutes = require('./routes/users');

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({
  extended: false
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if(req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Methods" , "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});



// Routes
app.use('/articles' , articlesRoutes);
app.use('/categories' , categoriesRoutes);
app.use('/users' , usersRoutes);


// app.get('/' , (req,res) => {
//   res.status(200).json({
//     message: 'Hello World 2'
//   })
// });


// app.post('/articles' , (req, res) =>{
//   res.status(200).json({
//     message: req.body.message
//   })
// });

app.use((req, res, next) => {
  const error = new Error('Not Found.');
  error.status = 404;
  next(error);
});


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error : {
      message : error.message
    }
  })
});

module.exports = app;
