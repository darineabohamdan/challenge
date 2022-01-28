

randomPattern = [];

var colors = ["red", "blue", "green", "yellow"];

var currentLevel = 0;

var start = false;

// sounds of each color  
function sound_color(random_color) {
    var audio = new Audio("sounds/" + random_color + ".mp3");
    audio.play();
}

//  starting the game

$(document).keypress(function () {
    
        generatingRndSq();

    
});

function generatingRndSq() {
    myPattern = [];

    currentLevel++;

    $("#title").text("Level " + currentLevel);

     random_number = Math.floor(Math.random() * 4);
     random_color = colors[random_number];
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

//adding the last color to myPattern

$(".btn").click(function () {
    var my_color = $(this).attr("id");
    myPattern.push(my_color);

    sound_color(my_color);
    flash_press(my_color);

    comparing_arrays(myPattern.length - 1);
})

// comparing the answer with the randomPattern

function comparing_arrays(currentLevel) {

    if (randomPattern[currentLevel] === myPattern[currentLevel]) {
        if (myPattern.length === randomPattern.length) {
            setTimeout(function () {
                generatingRndSq();
            }, 2000);
        }
    }
    else {
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 100);
        $("#title").text("Game Over, Press any key to Restart");
        restart();
    }

}


//restarting the game 
function restart() {
    currentLevel = 0;
    randomPattern = [];

    start = false;
}
