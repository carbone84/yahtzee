var rollsLeft = 3;
var rollsLeft_span = document.querySelector(".rollsLeft");
var roll_button = document.querySelector("#rollButton");
var newGame_button = document.querySelector("#newGame");
var diceArr_div = document.querySelectorAll(".dice ul");

newGame_button.addEventListener("click", function() {
    rollsLeft = 3;
    rollsLeft_span.innerHTML = rollsLeft;
    for(var i = 0; i < diceArr_div.length; i++) {
        diceArr_div[i].innerHTML = getDiceLis(i + 1);
    }
})

roll_button.addEventListener("click", function() {
    clearDice();
    rollDice();
    rollsLeft_span.innerHTML = rollsLeft;
})

function clearDice() {

    for(var i = 0; i < diceArr_div.length; i++) {
        diceArr_div[i].innerHTML = getDiceLis(0);
    }
}

function rollDice() {
    for(var i = 0; i < diceArr_div.length; i++) {
        diceArr_div[i].innerHTML = getDiceLis(Math.ceil(Math.random()*5));
    }
    rollsLeft--;
}

function getDiceLis(num) {
    switch(num) {
        case 1:
            return "<li class=\"center\"></li>";
        case 2:
            return "<li class=\"top-left\"></li><li class=\"bot-right\"></li>";
        case 3:
            return "<li class=\"top-left\"></li><li class=\"center\"></li><li class=\"bot-right\"></li>";
        case 4:
            return "<li class=\"top-left\"></li><li class=\"bot-left\"></li><li class=\"top-right\"></li><li class=\"bot-right\"></li>";
        case 5:
            return "<li class=\"top-left\"></li><li class=\"bot-left\"></li><li class=\"center\"></li><li class=\"top-right\"></li><li class=\"bot-right\"></li>";
        case 0:
            return "";
    }
}