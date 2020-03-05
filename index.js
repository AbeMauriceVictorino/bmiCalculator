const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/Ladder", function(req, res){
  res.sendFile(__dirname + "/Ladder.html");
});

app.post("/Ladder", function(req, res){

  var depth = parseInt(req.body.depth);
  var height = parseInt(req.body.height);

  var length = Math.sqrt(Math.pow (depth,2) + Math.pow (height,2));

res.send(length.toFixed(0) + " Feet Long");

});

app.listen(3000, function() {
  console.log ("Server is running on port 3000");
});