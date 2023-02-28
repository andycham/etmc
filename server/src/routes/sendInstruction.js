var express = require('express');
var router = express.Router();

const Radio = require('../models/Radio');

router.post("/", function(req,res,next){
  const radio = new Radio();
  input = req.body.input;
  
  console.log("input=" + input);
  radio.input(input);  

  var status = "ok";
  data = {"output" : radio.output, "status" : status};
  res.json(data);
});


module.exports = router;
