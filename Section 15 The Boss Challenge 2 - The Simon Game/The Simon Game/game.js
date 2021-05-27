const buttonColors = ["red", "green", "blue", "yellow"];  // creating a array of 4 types of colors.

let started = false; // variable to know if game has started.
let level = 0;  //variable to store level value
let gamePattern = [];  // creating a empty array to store the game patterns.
let userClickPattern = [];  // creating a empty array to stor user click pattern.

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");  // getting the id of the button user clicked

    userClickPattern.push(userChosenColor);  // adding the color user clicked to the array userClickPattern.

    playSound(userChosenColor);  // calling playSound with userChosenColor as parameter

    animatePress(userChosenColor);  // calling animatePress using parameter useChosenColor

    checkAnswer(userChosenColor.length-1);  //calling checkAnswer using parameter userChosenColor.length-1
});

$("body").on('keydown',function(){  //eventListener to start the game when key is pressed
    if(!started){
        newSequence();
        started=true;
        $("#level-title").text("Level "+level);  //changing text content of h1 when level > 1
    };
});

function newSequence() {
    userClickPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random()*4);  // return a random number from 0 to 3.
    let randomChosenColor = buttonColors[randomNumber];  // choose a random color from the array button colors.
    gamePattern.push(randomChosenColor);  // add the random color to array gamePatterns. 

    $("#"+randomChosenColor).animate({opacity: 0.1}).animate({opacity: 1});  // animating the button for flashing

    playSound(randomChosenColor);  //// calling playSound with randomChosenColor as parameter
    
}

function playSound(name) {  // function to play sound according to the parameter 'name'
    var audio = new Audio("sounds/" + name + ".mp3");  //adding voice according randomChooseColor
    audio.play();

}

function animatePress(currentColour) {  // creating a class animatePress with parameter currentColour
    $("#"+currentColour).addClass("pressed");  // adding class pressed to the current id

    setTimeout (function() {  // removing class pressed to the current id after 0.1s
        $("#"+currentColour).removeClass("pressed"); 
    },100);
};

function checkAnswer(currentLevel){  // function to check if the answer is correct

    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) { // checking if the pattern is correct

        if (gamePattern.length === userClickPattern.length) {  // checking if the current sequence is correct if correct calling newSequence after 1s
            setTimeout(function() {
                newSequence();
                $("#level-title").text("Level "+level);
            }, 1000);

        }
    } else {  // when the user input is wrong
          playSound("wrong");  // sound for wrong answer
          $("body").addClass("game-over");  // adding game-over class
          setTimeout(function() {  // removing game-over class for 0.2s
              $("body").removeClass("game-over");
          },200);
          $("#level-title").text("Game Over, Press Any Key to Restart");  // changing h1 text when game over
          startOver()  // calling start over function
    }
    
}

function startOver() {  //function to reset all values
    level = 0;
    started = false;
    gamePattern = [];
}