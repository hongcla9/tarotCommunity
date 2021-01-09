const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");

const {User} = require("./models/User");

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,
{ useNewUrlParser : true , useUnifiedTopology : true, useCreateIndex : true , useFindAndModify:false
})
.then(()=> console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

app.post('/register',(req,res) => {
    //회원가입할때 필요한 정보들을 client 에서 가져오면
   // 그것들을 데이터 베이스에 넣어준다.


   const user = new User(req.body)
   user.save((err,userInfo)=>{
       if(err) return res.json({success:false, err}) 
       //에러가 있을경우 제이슨형식으로 성공하지 못했다고 메시지와함께 전송
       //성공할경우 200 은 성공했다는말 
       return res.status(200).json({
           success:true
       })
   })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})