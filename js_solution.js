var colors = ["red", "blue", "green", "yellow"];
var randomPattern = [];

var start = false;
var currentLevel = 0;
var body = document.querySelector("body");
var currentTitle = document.getElementById("title");

//  starting the game
document.addEventListener("keypress", function () {
    if (start == true) {
        generatingRndSq();
    }
});

function generatingRndSq() {
     myPattern = [];    
    currentLevel += 1;
    currentTitle.innerHTML = `currentLevel ${currentLevel}`;
    var random_number = Math.floor(Math.random() * 4);
    var random_color = colors[random_number];

    randomPattern.push(random_color);

    //flashing  the box which the user press


    var animationBtn = document.querySelector("#" + random_color);


    animationBtn.classList.add("pressed");
    setTimeout(() => {
        animationBtn.classList.remove("pressed");
    }, 50);
    color_sound(random_color);

}

//adding the last color to myPattern

var butn = document.getElementsByClassName("btn");
document.querySelectorAll(".btn").forEach(function(butn) {
    butn.onclick = function()  {
        var my_color = butn.id;
        myPattern.push(my_color);
        color_sound(my_color);
        flash_press(my_color);
        comparing_arrays(myPattern.length - 1);
    };
});


// comparing the answer with the randomPattern

var comparing_arrays = function(currentLevel) {
    if (randomPattern[currentLevel] === myPattern[currentLevel]) {
        if (myPattern.length === randomPattern.length) {
            setTimeout(function()  {
                generatingRndSq();
            }, 2000);
        }

    } else {
        body.classList.add("game-over");
        setTimeout(function()   {
            body.classList.remove("game-over");
        }, 200);
        gameOverAudio();
        currentTitle.innerHTML = `Game Over, Press Any Key to Restart`;
        restart();
    }
};


//restarting the game 

var restart = function()  {
    currentLevel = 0;
    randomPattern = [];
    start = false;
};


// sounds and audio

var color_sound = function(name)  {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function gameOverAudio() {
    var gameOver = new Audio("sounds/wrong.mp3");
    gameOver.play();
}


//flashing  the box which the user press

var flash_press = function(currentColor)  {
    var buttons = document.querySelector(`#${currentColor}`);
    buttons.classList.add("pressed");
    setTimeout(function() {
        buttons.classList.remove("pressed");
    }, 100);
};