myPattern = [];

randomPattern = [];

var colors = ["red", "blue", "green", "yellow"];

var currentLevel = 0;

var start = false;

// sounds of each color  
function sound_color(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

//  starting the game

$(document).keypress(function () {
    if (start = true) {
        generatingRndSq();

    }
});

function generatingRndSq() {
    myPattern = [];

    currentLevel++;

    $("#title").text("Level " + currentLevel);

    var random_number = Math.floor(Math.random() * 4);
    var random_color = colors[random_number];
    randomPattern.push(random_color);

    $("#" + random_color).fadeOut(100).fadeIn(100);
    sound_color(random_color);
}

//flashing  the box which the user press

function flash_press(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100)
}

