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


  app.use('/api/users', require('./routes/users'));   //유저 
  app.use('/api/product', require('./routes/product')); // TDirctory
  app.use('/api/spreads', require('./routes/spreads')); //Tspreads
  app.use('/api/tboard', require('./routes/tboard')); //TBOARD
 //타로스프레드 api

  
  app.use('/uploads', express.static('uploads'));
  app.use('/spreads', express.static('spreads'));
  app.use('/tboard', express.static('tboard'));

  const port = process.env.PORT || 5000

  app.listen(port, () => {
    console.log(`Server Running at ${port}`)
  });