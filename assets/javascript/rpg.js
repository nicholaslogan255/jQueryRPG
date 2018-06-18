var playerMaxHp = 10;
var playercurHp = 10;
var playerAttack = 4;
var playerName = "Luke Skywalker"


var enemyMaxHp = 10;
var enemycurHp = 10;
var enemyAttack = 4;

var message = "";

var map = 1;

var xpos = 1;
var ypos = 1;

var inTown = false;





// code runs here
$(document).ready(function () {



    // when player goes north
    $("#northB").on("click", function () {

        // if at north border
        if (ypos >= 10) {
            message = "To the north is a large valley. You can not move north any further."
        }
        else {
            // move north
            ypos++;
            message = "You travel northwards"

        }

        // random encounter

        // check for town
        if (xpos == 5 && ypos == 9) {
            message = "You have reached Mos Eisley"

            $("enterB").css({
                "display": "inline"
            });

        }
        // check for home
        else if (xpos == 1 && ypos == 1) {
            message = "You are at your home"
            $("enterB").css({
                "display": "inline"
            });
        }
        else {

            // hide button to enter if not by town or home
            $("enterB").css({
                "display": "none"
            });


        }




    });

    $("#southB").on("click", function () {

    });





});
