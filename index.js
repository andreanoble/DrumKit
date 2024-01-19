//gets how many buttons
let numButtons = document.querySelectorAll(".drum").length;
//listens for button click and then calls soundAny()
for (let i = 0; i < numButtons; i++){
    //Uses anonymous function()
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //what happens when button is clicked
        let buttonInnerHTML = this.innerHTML;
        soundAny(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }); 
}

//listens for keyboard input and then calls soundAny()
//addEventListener for the whole web page (document)
document.addEventListener('keydown', function(event){
    //event.key tells which key is pressed
    soundAny(event.key)
    buttonAnimation(event.key);
    });

//plays the drums based on which button/key is triggered
function soundAny(inputAny){
    switch (inputAny) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "l":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "k":
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break;

        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        default: alert(inputAny);
            break;
    }
}

function buttonAnimation(currentKey){
    //get the class of the current key(button or keyboard)
    const activeButton = document.querySelector(`.${currentKey}`);
    //adds CSS style when triggered
    activeButton.classList.add("pressed");
    //wait for a set time and then remove the class
    //for a temporary change effect
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);


}

