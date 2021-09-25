const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
  //console.log(req);
  //respone.send("hello");
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{
  console.log(req.body);
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var sum=num1+num2;
  res.send("Hello there the sum of the number is : " +sum);
});

// app.get("/contacts",function(req,respone)
// {
//   respone.send("contacts");
// });

app.listen(3000,function(){
  console.log("The server is started at 3000");
});
