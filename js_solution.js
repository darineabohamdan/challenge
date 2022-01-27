var colors = ["red", "blue", "green", "yellow"];
var randomPattern = [];
var myPattern = [];
var start = false;
var currentLevel = 0;
var body = document.querySelector("body");
var currentTitle = document.getElementById("title");

//  starting the game
document.addEventListener("keypress", function () {
    if (!start) {
        generatingRndSq();
    }
});

function generatingRndSq() {
    currentLevel += 1;
    currentTitle.innerHTML = `currentLevel ${currentLevel}`;
    var random_number = Math.floor(Math.random() * 4);
    var random_color = colors[random_number];

    randomPattern.push(random_color);


    var animationBtn = document.querySelector("#" + random_color);


    animationBtn.classList.add("pressed");
    setTimeout(() => {
        animationBtn.classList.remove("pressed");
    }, 50);
    color_sound(random_color);

}

//adding the last color to myPattern

var bTn = document.getElementsByClassName("btn");
document.querySelectorAll(".btn").forEach((btn) => {
    btn.onclick = () => {
        var my_color = btn.id;
        myPattern.push(my_color);
        color_sound(my_color);
        flash_press(my_color);
        comparing_arrays(myPattern.length - 1);
    };
});


// comparing the answer with the randomPattern

var comparing_arrays = (currentLevel) => {
    if (randomPattern[currentLevel] === myPattern[currentLevel]) {
        if (myPattern.length === randomPattern.length) {
            setTimeout(() => {
                generatingRndSq();
            }, 1000);
        }
    } else {
        body.classList.add("game-over");
        setTimeout(() => {
            body.classList.remove("game-over");
        }, 200);
        gameOverAudio();
        currentTitle.innerHTML = `Game Over, Press Any Key to Restart`;
        currentTitle.style.fontSize = "2rem";
        restart();
    }
};


//restarting the game 

var restart = () => {
    currentLevel = 0;
    randomPattern = [];
    start = false;
};


// sounds and audio

var color_sound = (name) => {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function gameOverAudio() {
    var gameOver = new Audio("sounds/wrong.mp3");
    gameOver.play();
}


//flashing  the box which the user press

var flash_press = (currentColor) => {
    var buttons = document.querySelector(`#${currentColor}`);
    buttons.classList.add("pressed");
    setTimeout(() => {
        buttons.classList.remove("pressed");
    }, 100);
};