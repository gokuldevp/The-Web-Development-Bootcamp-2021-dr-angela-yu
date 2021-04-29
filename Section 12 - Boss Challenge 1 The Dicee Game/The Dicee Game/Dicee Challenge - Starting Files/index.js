// getting two random numbers from 1 to 6.
var randomNumber1=Math.floor(Math.random()*6+1)
var randomNumber2=Math.floor(Math.random()*6+1)


// changing the dice 1(img1) and dice 2(img2) based on the random numbers.
document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";
document.querySelector(".img2").src = "images/dice"+randomNumber2+".png";


// show that the game is a draw if both dices show same number.
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "The Game is a Draw!";

// show that Player 1 won if player 1 have more score than player 2.    
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 won!!!🏆";

// show that Player 2 won if player 1 have more score than player 1.    
}else{
    document.querySelector("h1").textContent = "🏆Player 2 won!!!";
}