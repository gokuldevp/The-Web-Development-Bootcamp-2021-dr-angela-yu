const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

function calculateBmi(h, w){
    let bmi = Math.round((w / h) * 100) / 100;
    let result = ""
    if (bmi < 18.5){
        result = "Your BMI is " + bmi +" which is less than 18.5 so you are Underweight, Try eating more food!";
    }else if(bmi >= 18.5 && bmi < 25){
        result = "Your BMI is " + bmi +" which is between 18.5 and 24.9 so your BMI is Normal, Keep it UP!";
    }else if(bmi >= 25 && bmi < 30){
        result = "Your BMI is " + bmi +" which is between 25 and 29.9 so you are Overweight, Go for running or something!";
    }else if(bmi > 30){
        result = "Your BMI is " + bmi +" which is over 30 that too much, yor have Obesity go see a doctor or sometehing!";
    }
    return result;
};

app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmi.html");
});

app.post("/", function(req, res){
    let hei = (Number(req.body.height)/100)**2;
    let wei = Number(req.body.weight);
    let finalResult = calculateBmi(hei,wei)

    res.send("<h1> BMI Result:</h1> <br><br> <h2>"+finalResult+"</h2>");
})

app.listen(3000,function(){
    console.log("The Server is running on port 3000.");
});