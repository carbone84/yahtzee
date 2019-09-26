var rollsLeft = 3;
var rollsLeft_span = document.querySelector(".rollsLeft");
var roll_button = document.querySelector("#rollButton");
var newGame_button = document.querySelector("#newGame");
var diceArr_ul = document.querySelectorAll(".dice ul");
var diceArr_div = document.querySelectorAll(".dice");
var scoreArr_td = document.querySelectorAll(".score");

init();

function init() {
    for(var i = 0; i < diceArr_ul.length; i++) {
        diceArr_div[i].addEventListener("click", function() {
            this.classList.toggle("selected");
        });
    }

    for(var i = 0; i < scoreArr_td.length; i++) {
        scoreArr_td[i].addEventListener("click", function() {
            alert("Hello");
        })
    }
}

newGame_button.addEventListener("click", function() {
    resetGame();
})

function resetGame() {
    rollsLeft = 3;
    rollsLeft_span.innerHTML = rollsLeft;
    for(var i = 0; i < diceArr_ul.length; i++) {
        diceArr_ul[i].innerHTML = getDiceLis(i + 1);
        diceArr_div[i].classList.remove("selected");
    }
}

roll_button.addEventListener("click", function() {
    if(rollsLeft > 0) {
        for(var i = 0; i < diceArr_ul.length; i++) {
            if (!diceArr_ul[i].parentElement.classList.contains("selected")) {
                rollDice(diceArr_ul[i]);
            }
        }
        rollsLeft--;
        rollsLeft_span.innerHTML = rollsLeft;
    }
})

function clearDice() {
    for(var i = 0; i < diceArr_ul.length; i++) {
        diceArr_ul[i].innerHTML = "";
    }
}

function rollDice(dice) {
    dice.innerHTML = getDiceLis(Math.ceil(Math.random() * 5));
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
        // case 0:
        //     return "";
    }
}