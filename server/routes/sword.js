const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Product } = require("../models/Product");

//=================================
//         마이너   스워드
//=================================

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  //가져온 이미지를 저장을 해주면 된다.
  upload(req, res, (err) => {
    if (err) {
      return req.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/", (req, res) => {
  //받아온 정보들을 DB에 넣어 준다.
  const product = new Product(req.body);

  product.save((err) => {
    if (err)
      return res
        .status(400)
        .json({ success: false, err }, console.log("err", err));
    return res.status(200).json({ success: true });
  });
});

router.post("/update", (req, res) => {
  //받아온 정보들을 DB에 넣어 준다.
  const product = new Product(req.body);

  product.update((err) => {
    if (err)
      return res
        .status(400)
        .json({ success: false, err }, console.log("err", err));
    return res.status(200).json({ success: true });
  });
});

router.post("/products", (req, res) => {
  //프로덕츠콜렉션에 들어있는 모든 상품 정보를 가져오기
  let limit = req.body.limit ? parseInt(req.body.limit) : 20; //스트링인 경우 숫자로 바꿔줌
  let skip = req.body.skip ? parseInt(req.body.skip) : 0; //스트링인 경우 숫자로 바꿔줌
  Product.find() //조건을 넣어도됨
    .populate("writer") //이사람에 대한 모든정보를 가져올수있음
    .skip(skip)
    .limit(limit)
    .exec((err, productInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res
        .status(200)
        .json({ success: true, productInfo, PostSize: productInfo.length });
    });
});
router.get("/products_by_id", (req, res) => {
  //포스트메소드를 이용해서 필요한 값을 프론트엔드에서 가져올때는 req.body이지만
  // 쿼리를 이용하여 가져올땐 req.query
  let type = req.query.type;
  let productInfoId = req.query.id;
  //프로덕트아이디를 이용해서 db에서 productid와 같은상품의 정보를 가져온다

  Product.find({ _id: productInfoId })
    .populate("writer")
    //쿼리 실행
    .exec((err, productInfo) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ success: true, productInfo });
    });
});
router.get("/products_by_id/update", (req, res) => {
  //포스트메소드를 이용해서 필요한 값을 프론트엔드에서 가져올때는 req.body이지만
  // 쿼리를 이용하여 가져올땐 req.query
  let type = req.query.type;
  let productInfoId = req.query.id;
  //프로덕트아이디를 이용해서 db에서 productid와 같은상품의 정보를 가져온다

  Product.find({ _id: productInfoId })
    .populate("writer")
    //쿼리 실행
    .exec((err, productInfo) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ success: true, productInfo });
    });
});

module.exports = router;
