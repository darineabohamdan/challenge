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

