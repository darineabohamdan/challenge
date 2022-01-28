

var colors = ["red", "blue", "green", "yellow"];
var randomPattern = [];
var start = false;
var currentLevel = 0;
var body = document.querySelector("body");
var currentTitle = document.getElementById("title");

// sounds of each color

var sound_color = function(name)  {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};


//  starting the game


document.addEventListener("keypress", function () {
    
        generatingRndSq();
    
});

function generatingRndSq() {
     myPattern = [];    
    currentLevel += 1;
    currentTitle.innerHTML = `Level ${currentLevel}`;
    var random_number = Math.floor(Math.random() * 4);
    var random_color = colors[random_number];

    randomPattern.push(random_color);

    //flashing  the box of the generated color and the box that the user press


    var flash_press = document.querySelector("#" + random_color);


    flash_press.classList.add("pressed");
    setTimeout(function() {
        flash_press.classList.remove("pressed");
    }, 50);
    sound_color(random_color);

}

var flash_press = function(currentColor)  {
    var buttons = document.querySelector(`#${currentColor}`);
    buttons.classList.add("pressed");
    setTimeout(function() {
        buttons.classList.remove("pressed");
    }, 100);
};

//adding the last color to myPattern

var butn = document.getElementsByClassName("btn");
document.querySelectorAll(".btn").forEach(function(butn) {
    butn.onclick = function()  {
        var my_color = butn.id;
        myPattern.push(my_color);
        sound_color(my_color);
        flash_press(my_color);
        comparing_arrays(myPattern.length - 1);
    };
});


// comparing the answer with the randomPattern


var comparing_arrays = function(currentLevel) {
    if (randomPattern[currentLevel] == myPattern[currentLevel]) {
        if (myPattern.length == randomPattern.length) {
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

function gameOverAudio() {
    var gameOver = new Audio("sounds/wrong.mp3");
    gameOver.play();
}


//restarting the game 

var restart = function()  {
    currentLevel = 0;
    randomPattern = [];

};