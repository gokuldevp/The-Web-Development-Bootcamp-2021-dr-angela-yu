const express = require("express");
const bodyParser = require("body-parser");  // In order to get access to the post data we have to use body-parser
const app = express();
app.use(bodyParser.urlencoded({extended: true}));  //in order to use body-parser we need to use like this


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");        //sendFile is used to send file as response and __dirname is used to get the current file location where ever the file is render at
});

app.post("/", function(req, res){                   // post method is used to get data posted on the form.
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = Number(num1) + Number(num2);
    res.send("The sum of First number and Second number is "+ result);
});

app.listen(3000,function(){
    console.log("the calculator is running on port 3000!");
});