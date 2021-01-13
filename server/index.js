const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');


//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 
app.use(bodyParser.json());
app.use(cookieParser());



const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


  app.use('/api/users', require('./routes/users'));
  app.use('/api/product', require('./routes/product')); // 타로백과사전
  app.use('/api/spreads', require('./routes/spreads')); // 타로백과사전
 //타로스프레드 api

  
  app.use('/uploads', express.static('uploads'));
  app.use('/spreads', express.static('spreads'));


  const port = process.env.PORT || 5000

  app.listen(port, () => {
    console.log(`Server Running at ${port}`)
  });