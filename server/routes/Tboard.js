const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Tboard } = require("../models/Tboard");

//=================================
//             Product
//=================================

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tboard/");
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
  const tboard = new Tboard(req.body);

  tboard.save((err) => {
    if (err)
      return res
        .status(400)
        .json({ success: false, err }, console.log("err", err));
    return res.status(200).json({ success: true });
  });
});
router.post("/comment", (req, res) => {
  //받아온 정보들을 DB에 넣어 준다.
  const tboard = new Tboard(req.body);

  tboard.save((err) => {
    if (err)
      return res
        .status(400)
        .json({ success: false, err }, console.log("err", err));
    return res.status(200).json({ success: true });
  });
});

router.post("/gettboard", (req, res) => {
  //프로덕츠콜렉션에 들어있는 모든 상품 정보를 가져오기
  Tboard.find() //조건을 넣어도됨
    .populate("writer") //이사람에 대한 모든정보를 가져올수있음
    .exec((err, tboardInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, tboardInfo });
    });
});
router.get("/tboard_by_id", (req, res) => {
  //포스트메소드를 이용해서 필요한 값을 프론트엔드에서 가져올때는 req.body이지만
  // 쿼리를 이용하여 가져올땐 req.query
  let type = req.query.type;
  let tboardInfoId = req.query.id;
  //프로덕트아이디를 이용해서 db에서 productid와 같은상품의 정보를 가져온다

  Tboard.find({ _id: tboardInfoId })
    .populate("writer")
    //쿼리 실행
    .exec((err, tboardInfo) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ success: true, tboardInfo });
    });
});
module.exports = router;
