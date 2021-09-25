const express = require("express");
const app = express();

app.get("/",function(req,res)
{
  //console.log(req);
  //respone.send("hello");
  res.sendFile(__dirname+"/index.html");
});
app.get("/contacts",function(req,respone)
{
  respone.send("contacts");
});

app.listen(3000,function(){
  console.log("The server is started at 3000");
});
