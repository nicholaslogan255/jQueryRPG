var playerMaxHp = 10;
var playercurHp = 10;
var playerAttack = 4;
var playerName = "Luke Skywalker"
var playerExperience = 0;


var enemyMaxHp = -1;
var enemycurHp = -1;
var enemyAttack = -1;
var enemyName = "-1";

var message = "";

var inBattle = false;

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
            message = "You travel northwards. "

            // try to spawn random enemy encounter
            battleEncounter();

        }

        if(!inBattle){
            // log position
        console.log("Current pos| X: " + xpos + ", Y: " + ypos);

        // check for town
        inTown();

        // update DOM
        $("#mainText").text(message);

        }

        

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
        if (xpos >= 9) {
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
        if (xpos <= 1) {
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
        message = "You feel well rested. "

        // update DOM
        $("#mainText").text(message);
        $("#playerCurHealth").text(playercurHp);


    });

    $("#travelB").on("click", function () {
        console.log("travelB clicked");

        message = "You board a junky ship with some shady smugglers. But whatever, good enough. We got off the planet. You win! ";

        // update DOM
        $("#mainText").text(message);
        $("#townM").hide();
        $("#roadM").hide();
        $("#menuMain").hide();


    });

    $("#runB").on("click", function () {
        console.log("runB clicked");

        var rand = Math.floor(Math.random()*5);


        // TODO:  running chance to fail based on enemy you 
        if(rand == 0){
            message = "Oh no! You were unable to get away!"

        }
        else{
            endBattle();
        }

        


    });

    function inTown() {

        // check for town
        if (xpos == 5 && ypos == 8) {
            message += "You have reached Mos Eisley. "

            $("#enterB").show(); // show the enter button
            return true;

        }
        // check for home
        else if (xpos == 1 && ypos == 1) {
            message += "You are at your home. "
            $("#enterB").show();// show the enter button
        }
        else { // not by town

            $("#enterB").hide(); // hide button to enter if not by town or home

            return false;
        }

    }


    function battleEncounter() { // decides if battle and with whom

        var roll = Math.floor(Math.random() * 10003); // pick a random number 0 -9999

        // debug
        // console.log("#:" + roll);



        if (roll == 10002) { // spawns emperor (.1% chance)
            console.log("## Spawn The Emperor!");

            enemyMaxHp = 1000;
            enemycurHp = 1000;
            enemyAttack = 100;
            enemyName = "The Galactic Emperor";

            // change enemy image
            $("#enemyImg").css('content', 'url("assets/images/Emporer.jpg")');

            // start battle
            battle();




        }
        else if (roll == 10001) { // spawns darth vader (.1% chance)
            console.log("## Spawn Darth Vader!");

            enemyMaxHp = 1000;
            enemycurHp = 1000;
            enemyAttack = 100;
            enemyName = "Darth Vader";

            // change enemy image
            $("#enemyImg").css('content', 'url("assets/images/Emporer.jpg")');

            // start battle
            battle();
        }
        else if (roll == 10000) { // spawns boba fett (.1% chance)
            console.log("## Spawn Boba Fett!");

            enemyMaxHp = 1000;
            enemycurHp = 1000;
            enemyAttack = 100;
            enemyName = "Boba Fett";

            // change enemy image
            $("#enemyImg").css('content', 'url("assets/images/Emporer.jpg")');

            // start battle
            battle();
        }
        else if (roll >= 0 && roll <= 1000) { // spawns jawa (~10% chance)
            console.log("--Spawn Jawa");

            enemyMaxHp = 50;
            enemycurHp = 50;
            enemyAttack = 4;
            enemyName = "Jawa";

            // change enemy image
            $("#enemyImg").css('content', 'url("assets/images/Jawa.jpg")');

            // start battle
            battle();
        }
        else if (roll >= 1001 && roll <= 4000) { // spawns womp rat (~40% chance)
            console.log("--Spawn Womp Rat");

            enemyMaxHp = 10;
            enemycurHp = 10;
            enemyAttack = 1;
            enemyName = "Womp Rat";

            // change enemy image
            $("#enemyImg").css('content', 'url("assets/images/wompRat.jpg")');

            // start battle
            battle();
        }
        else { // nothing spawns
            console.log("--No Encounter");
        }

        return roll; // returns what number was chosen (for debug, no other purpose)
    }

    function battle() { // show on screen the enemy
        console.log("-Battle Start");

        inBattle = true;

        $("#roadM").hide(); // hide travel buttons
        $("#battleM").show(); // show combat buttons
        $("#enemyBox").show(); // make enemy appear

        message += "An Enemy appeared!"

        // update DOM
        $("#mainText").text(message);
        $("#enemyName").text(enemyName);
        $("#enemyCurHealth").text(enemycurHp);
        $("#enemyMaxHealth").text(enemyMaxHp);
    }

    function endBattle() {
        console.log("-end battle");

        inBattle = false;

        message = "You ran away sucessfully!"

        $("#mainText").text(message); // show text
        $("#roadM").show(); // show travel buttons
        $("#battleM").hide(); // hide combat buttons
        $("#enemyBox").hide(); // make enemy disapper



    }





});
