var playerMaxHp = 10;
var playercurHp = 10;
var playerAttack = 4;
var playerName = "Luke Skywalker"
var playerExperience = 0;


var enemyMaxHp = 10;
var enemycurHp = 10;
var enemyAttack = 4;

var message = "";

var map = 1;

var xpos = 1;
var ypos = 1;

// code runs here
$(document).ready(function () {



    // try to go north
    $("#northB").on("click", function () {

        console.log("northB clicked");

        // if at north border
        if (ypos >= 10) {
            message = "To the north is the large Glog Valley. You can not move north any further."
        }
        else {
            // move north
            ypos++;
            message = "You travel northwards"

            // try to spawn random enemy encounter
            battleEncounter();

        }

        // log position
        console.log("Current pos| X: " + xpos + ", Y: " + ypos);

        // check for town
        inTown();

        // update DOM
        $("#mainText").text(message);

    });


    // try to go south
    $("#southB").on("click", function () {
        console.log("southB clicked");

        // if at south border
        if (ypos <= 1) {
            message = "To the south is the massive Greenback Mesa. You can not move south any further. "
        }
        else {
            // move south
            ypos--;
            message = "You travel southwards. "

            // try to spawn random enemy encounter
            battleEncounter();

        }

        // log position
        console.log("Current pos| X: " + xpos + ", Y: " + ypos);

        // check for town
        inTown();

        // update DOM
        $("#mainText").text(message);

    });

    $("#eastB").on("click", function () {
        console.log("eastB clicked");

         // if at eastern border
         if (xpos >=9) {
            message = "To the east is the large Lyroth Mountain. You can not move east any further. "
        }
        else {
            // move east
            xpos++;
            message = "You travel eastwards. "

            // try to spawn random enemy encounter
            battleEncounter();

        }

        // log position
        console.log("Current pos| X: " + xpos + ", Y: " + ypos);

        // check for town
        inTown();

        // update DOM
        $("#mainText").text(message);

    });

    $("#westB").on("click", function () {
        console.log("westB clicked");

         // if at eastern border
         if (xpos <=1) {
            message = "To the west is the Ten Mile Plateau. You can not move west any further. "
        }
        else {
            // move west
            xpos--;
            message = "You travel westward. "

            // try to spawn random enemy encounter
            battleEncounter();

        }

        // log position
        console.log("Current pos| X: " + xpos + ", Y: " + ypos);

        // check for town
        inTown();

        // update DOM
        $("#mainText").text(message);

    });


    // enter button
    $("#enterB").on("click", function () {
        console.log("enterB clicked");

        // check for mos eisley
        if (xpos == 5 && ypos == 8) {

            message = "You made it to Mos Eisley.\n You can rest to restore your health to maximum.\n"

            // change background
            $("body").css("background-image", "url('assets/images/mosEisley.jpg')");


            // change nav buttons
            $("#townM").show(); // show in town buttons
            $("#roadM").hide(); // hide on road buttons


            // update DOM
            $("#mainText").text(message);




        }
        // check for home
        else if (xpos == 1 && ypos == 1) {

            message = "You enter your home.\nYou see your bed. You can rest to restore your health to maximum."

            $("body").css("background-image", "url('assets/images/house.jpg')");

            // change nav buttons
            $("#townM").show(); // show in town buttons
            $("#travelB").hide(); // hide the travel button

            $("#roadM").hide(); // hide on road buttons 

            // update DOM
            $("#mainText").text(message);

        }
        else { // not by town
            alert("You should not see this. The enter button should only appear when by town or home");
        }
    });


    $("#leaveB").on("click", function () {
        console.log("leaveB clicked");
        message = "You leave.";

        $("body").css("background-image", "url('assets/images/tatooine.jpg')");


        $("#travelB").show(); // show the travel button
        $("#townM").hide(); // hide in town buttons
        

        $("#roadM").show(); // show on road buttons 

         // update DOM
         $("#mainText").text(message);



    });


    $("#restB").on("click", function () {
        console.log("restB clicked");

        playercurHp = playerMaxHp;
        message = "You feel well rested."

        // update DOM
        $("#mainText").text(message);
        $("#playerCurHealth").text(playercurHp);


    });

    $("#travelB").on("click", function () {
        console.log("travelB clicked");

        message = "You board a junky ship with some shady smugglers. But whatever, good enough. We got off the planet. You win!";

        // update DOM
        $("#mainText").text(message);
        $("#townM").hide();
        $("#roadM").hide();
        $("#menuMain").hide();
        

    });



    function inTown() {

        // check for town
        if (xpos == 5 && ypos == 8) {
            message += "You have reached Mos Eisley"

            $("#enterB").show(); // show the enter button
            return true;

        }
        // check for home
        else if (xpos == 1 && ypos == 1) {
            message += "You are at your home"
            $("#enterB").show();// show the enter button
        }
        else { // not by town

            $("#enterB").hide(); // hide button to enter if not by town or home

            return false;
        }

    }


    function battleEncounter() {

        var roll = Math.floor(Math.random() * 10003); // pick a random number 0 -9999

        // console.log("#:" + roll);

        if (roll == 10002) { // spawns emperor (.1% chance)
            console.log("## Spawn The Emperor!");
        }
        else if (roll == 10001) { // spawns darth vader (.1% chance)
            console.log("## Spawn Darth Vader!");
        }
        else if (roll == 10000) { // spawns boba fett (.1% chance)
            console.log("## Spawn Boba Fett!");
        }
        else if (roll >= 0 && roll <= 1000) { // spawns jawa (~10% chance)
            console.log("--Spawn Jawa");
        }
        else if (roll >= 1001 && roll <= 4000) { // spawns womp rat (~40% chance)
            console.log("--Spawn Womp Rat");
        }
        else { // nothing spawns
            console.log("--No Encounter");
        }

        return roll;






    }

    function battle() {

    }





});
