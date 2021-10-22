/*
step 1 : create javascript file server.js
step 2 : npm init 
step 3 : add the details in init
step 4 : npm install express
step 5 : write code in server.js
step 6 : run server.js using node server.js
*/


const express = require("express");  //creating a constant express to store the npm express
const app = express();  //creating a constant app to get express method


//sending a get request to get the response
//request(req) and response(res) are needed here in a get request
app.get("/", function(req, res){
    res.send("Hi There");
});

app.get("/contact", function(req, res){
    res.send("contact me at gokuldev.p@gmail.com")
});

app.get("/about", function(req, res){
    res.send("My name is Gokul Dev P and I love to read books!")
})

//setting the port to local host 3000
app.listen(3000, function(){
    console.log("The console is working in port 3000!");
});
