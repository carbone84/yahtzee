var roll_button = document.querySelector("#roll");
var diceArr_div = document.querySelectorAll(".dice ul");

roll_button.addEventListener("click", function() {
    rollDice();
})

function rollDice() {
    for(var i = 0; i < diceArr_div.length; i++) {
        diceArr_div[i].innerHTML = getDiceLis(Math.ceil(Math.random()*5));
    }
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
    }
}