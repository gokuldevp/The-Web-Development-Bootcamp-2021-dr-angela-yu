function makeAnimation(currentKey) { // function to set animation
    document.querySelector('.'+currentKey).classList.add('pressed');  //adding class
    setTimeout(function () {document.querySelector('.'+currentKey).classList.remove('pressed');}, 100);  //removing class after .1 second
}

function makeSound(key) { // function to make different sounds based on the value of key
    makeAnimation(key);
    switch (key) {  // switch for getting the key and play sound according to the value of the key
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;

        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;

        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;

        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;

        case 'j':
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;

        case 'k':
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break;

        case 'l':
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
    
        default:
            console.log(this.innerHTML)
            break;    
        }
    
}

// detecting button presses
let num_drums = document.querySelectorAll(".drum").length;
for (let i=0; i<num_drums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    }
    );
}

// detecting keyboard press
document.addEventListener('keydown', function (event) {
    makeSound(event.key);
}
);
