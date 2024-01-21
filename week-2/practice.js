const express = require("express");
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.send('Hello World!')
})
 app.post('/conversation', function(req,res){
    console.log(req.headers);
    res.send({msg:"2+2=4"});
 })
app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})