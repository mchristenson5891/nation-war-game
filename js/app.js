class Player {
    constructor(name) {
        // this.cities = [100, 75, 50];
        this.name = name;
        this.cityOne = 100;
        this.cityTwo = 75;
        this.cityThree = 50;
        this.infantry = 3;
        this.aircraft = 1;
        this.missiles = 0;
        this.moved = false;
    }

    // On the DOM, the attack method will need to somehow allow the player to select an attack, and the click will grab a target.

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 5.
    // This method will also decrement(-1) this.infantry

    attackInfantry(target, city) {
        if (this.infantry < 1) {
            alert("No infantry left!");
            return;
        } else if (this.moved === true) {
            alert(this.name + " has already moved!");
            return;
        } else if (target[city] < 1) {
            alert("That city is already destroyed!");
            return;
        } 

        let damage = Math.floor(Math.random() * (5 - 1) + 1);
        this.infantry -= 1; // remove 1 infantry  
        target[city] -= damage; 
        this.moved = true;

        game.cityImgChange();
        game.turnCheck(); // check on each player action
    }

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 10.
    // This method will also decrement(-1) this.aircraft

    attackAircraft(target, city) {
        if (this.aircraft < 1) {
            alert("No aircraft left!");
            return;
        } else if (this.moved === true) {
            alert(this.name + " has already moved!");
            return;
        } else if (target[city] < 1) {
            alert("That city is already destroyed!");
            return;
        } 
        
        let damage = Math.floor(Math.random() * (10-5) + 5);
        this.aircraft -= 1;
        target[city] -= damage;
        this.moved = true;

        game.cityImgChange();
        game.turnCheck(); // check on each player action
    }

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 20
    // This method will also decrement(-1) this.missiles

    attackMissiles(target, city) {
        if (this.missiles < 1) {
            alert("No missiles left!");
            return;
        } else if (this.moved === true) {
            alert(this.name + " has already moved!");
            return;
        } else if (target[city] < 1) {
            alert("That city is already destroyed!");
            return;
        } 
        
        let damage = Math.floor(Math.random() * (20 - 10) + 10 );
        this.missiles -= 1;
        target[city] -= damage;
        this.moved = true;

        game.cityImgChange();
        game.turnCheck(); // check on each player action
    }

    // Player is able to build between 3 to 10 infantry

    buildInfantry() {
        if (this.moved === true) {
            alert(this.name + " has already moved!");
            return;
        }

        this.infantry += Math.floor(Math.random() * (10 - 3) + 3 );
        this.moved = true;
    }
    
    // Player is able to build between 3 to 5 aircraft

    buildAircraft() {
        if (this.moved === true) {
            alert(this.name + " has already moved!");
            return;
        }
        
        this.aircraft += Math.floor(Math.random() * (5 - 3) + 3 );
        this.moved = true;
    }

    // Player is able to build between 1 to 3 missiles

    buildMissiles() {
        if (this.moved === true) {
            alert(this.name + " has already moved!");
            return;
        }
        
        this.missiles += Math.floor(Math.random() * (3 - 1) + 1);
        this.moved = true;
    }
}

// Game object will instantiate two objects from the Player class.They will represent Player 1 and Player 2

const game =  {
// set object properties
    playerOne : {},
    playerTwo : {},
    timer : 0,
    turns : 0,
    gameOver : false, // boolean 

// Initiate a TIMER in Seconds.
// probably going to involve a setInterval(function (), 1000)


    


// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
    start()  {
        // new instances of player
        this.playerOne = new Player("Player 1");
        this.playerTwo = new Player("Player 2");
        console.log(this.playerOne, " playerOne");
        console.log(this.playerTwo , " playerTwo");
        this.displayStats(); // start displaying stats
    },

// Turns MUST be tracked each time.
    turnCheck() {
        this.displayStats();
        // game.cityImgChange();

        if (game.playerOne.moved === true && game.playerTwo.moved === true) {
            this.turns++;

            // set moved boolean back to false
            this.playerOne.moved = false;
            this.playerTwo.moved = false;
            console.log("Turns completed: " + this.turns);
        }

        // check if game over conditions are met
        // playerTwo still gets equal number of turns
        this.isGameOver();
    },
    
    displayStats() {
        // <div id="p1StatsList">
        //     <p id="nameTagP1">Name: </p>
        //     <p id="infantryNumP1">Infantry: </p>
        //     <p id="aircraftNumP1">Aircraft: </p>
        //     <p id="missilesNumP1">Missiles </p>
        // </div>
        const nameP1 = document.querySelector('#nameTagP1');
        const infantryP1 = document.querySelector('#infantryNumP1');
        const aircraftP1 = document.querySelector('#aircraftNumP1');
        const missilesP1 = document.querySelector('#missilesNumP1');

        //     <div id="p2StatsList">
        //         <p id="nameTagP2">Name: </p>
        //         <p id="infantryNumP2">Infantry: </p>
        //         <p id="aircraftNumP2">Aircraft: </p>
        //         <p id="missilesNumP2">Missiles: </p>
        //     </div>
        const nameP2 = document.querySelector('#nameTagP2');
        const infantryP2 = document.querySelector('#infantryNumP2');
        const aircraftP2 = document.querySelector('#aircraftNumP2');
        const missilesP2 = document.querySelector('#missilesNumP2');
        
        nameP1.innerText = `Name: ${game.playerOne.name}`;
        infantryP1.innerText= `Infantry: ${game.playerOne.infantry}`;
        aircraftP1.innerText =`Aircraft: ${game.playerOne.aircraft}`;
        missilesP1.innerText = `Missiles: ${game.playerOne.missiles}`;

        nameP2.innerText = `Name: ${game.playerTwo.name}`;
        infantryP2.innerText =`Infantry: ${game.playerTwo.infantry}`;
        aircraftP2.innerText =`Aircraft: ${game.playerTwo.aircraft}`;
        missilesP2.innerText =`Missiles: ${game.playerTwo.missiles}`;

    },

    cityImgChange() {
    // city will be target[city] from other methods
        //     <div class="row">
    //         <div class="column" id="p1ImageDiv">
    //             <img id="p1CityOne" src="img/largebuildingsprite.png">
    //                 <img id="p1CityTwo" src="img/mediumbuildingsprite.png">
    //                     <img id="p1CityThree" src="img/smallbuildingsprite.png">
    //             </div>
    //                     <div class="column" id="p2ImageDiv">
    //                         <img id="p2CityOne" src="img/largebuildingsprite.png">
    //                             <img id="p2CityTwo" src="img/mediumbuildingsprite.png">
    //                                 <img id="p2CityThree" src="img/smallbuildingsprite.png"> 
    //             </div>
    //         </div>
        const p1CityOne = document.querySelector('#p1CityOne');
        const p1CityTwo = document.querySelector('#p1CityTwo');
        const p1CityThree = document.querySelector('#p1CityThree');
        
        const p2CityOne = document.querySelector('#p2CityOne');
        const p2CityTwo = document.querySelector('#p2CityTwo');
        const p2CityThree = document.querySelector('#p2CityThree');

        // game.playerOne city images
        
        if (this.playerOne.cityOne > 75) {
            p1CityOne.src = "img/largebuildingsprite.png";
        } else if (this.playerOne.cityOne > 50) {
            p1CityOne.src = "img/mediumbuildingsprite.png";
        } else if (this.playerOne.cityOne > 25) {
            p1CityOne.src = "img/smallbuildingsprite.png"
        } else if (this.playerOne.cityOne > 0) {
            p1CityOne.src = "img/tinybuildingsprite.png";
        } else {
            p1CityOne.src = "img/destroyedbuilding.png"
        }

        if (this.playerOne.cityTwo > 75) {
            p1CityTwo.src = "img/largebuildingsprite.png";
        } else if (this.playerOne.cityTwo > 50) {
            p1CityTwo.src = "img/mediumbuildingsprite.png";
        } else if (this.playerOne.cityTwo > 25) {
            p1CityTwo.src = "img/smallbuildingsprite.png"
        } else if (this.playerOne.cityTwo > 0) {
            p1CityTwo.src = "img/tinybuildingsprite.png";
        } else {
            p1CityTwo.src = "img/destroyedbuilding.png";
        }

        if (this.playerOne.cityThree > 75) {
            p1CityThree.src = "img/largebuildingsprite.png";
        } else if (this.playerOne.cityThree > 50) {
            p1CityThree.src = "img/mediumbuildingsprite.png";
        } else if (this.playerOne.cityThree > 25) {
            p1CityThree.src = "img/smallbuildingsprite.png"
        } else if (this.playerOne.cityThree > 0) {
            p1CityThree.src = "img/tinybuildingsprite.png";
        } else {
            p1CityThree.src = "img/destroyedbuilding.png";
        }

        // game.playerTwo city images

        if (this.playerTwo.cityOne > 75) {
            p2CityOne.src = "img/largebuildingsprite.png";
        } else if (this.playerTwo.cityOne > 50) {
            p2CityOne.src = "img/mediumbuildingsprite.png";
        } else if (this.playerTwo.cityOne > 25) {
            p2CityOne.src = "img/smallbuildingsprite.png"
        } else if (this.playerTwo.cityOne > 0) {
            p2CityOne.src = "img/tinybuildingsprite.png";
        } else {
            p2CityOne.src = "img/destroyedbuilding.png";
        }

        if (this.playerTwo.cityTwo > 75) {
            p2CityTwo.src = "img/largebuildingsprite.png";
        } else if (this.playerTwo.cityTwo > 50) {
            p2CityTwo.src = "img/mediumbuildingsprite.png";
        } else if (this.playerTwo.cityTwo > 25) {
            p2CityTwo.src = "img/smallbuildingsprite.png"
        } else if (this.playerTwo.cityTwo > 0) {
            p2CityTwo.src = "img/tinybuildingsprite.png";
        } else {
            p2CityTwo.src = "img/destroyedbuilding.png";
        }

        if (this.playerTwo.cityThree > 75) {
            p2CityThree.src = "img/largebuildingsprite.png";
        } else if (this.playerTwo.cityThree > 50) {
            p2CityThree.src = "img/mediumbuildingsprite.png";
        } else if (this.playerTwo.cityThree > 25) {
            p2CityThree.src = "img/smallbuildingsprite.png"
        } else if (this.playerTwo.cityThree > 0) {
            p2CityThree.src = "img/tinybuildingsprite.png";
        } else {
            p2CityThree.src = "img/destroyedbuilding.png";
        }

    
    },

    reducer() {
        (population, currentCity) => population + currentCity;
    },

// We must check if the game has ended on each and every turn.
// This method will need to run on each turn.
// if Player 1 and Player 2 cities drop to 0, the game is now ended.
// An alert or modal should appear on screen to let the players know that the game is now over.
// All setInterval() related methods should no longer initiate.
    isGameOver()  {
        // if (this.playerOne.cities.reduce(reducer) === 0) {
        //     alert("Player 1 defeated!");
        //     return "gameover";
        // } else if (this.playerOne.cities.reduce(reducer) === 0) {
        //     alert("Player 2 defeated!");
        //     return "gameover";
        // } else if (this.playerOne.cities.reduce(reducer) === 0 && this.playerTwo.cities.reduce(reducer) === 0) {
        //     alert("Mutually Assured Destruction!");
        //     return "gameover";
        // }
        const playerOneCities = this.playerOne.cityOne + this.playerOne.cityTwo + this.playerOne.cityThree;

        const playerTwoCities = this.playerTwo.cityOne + this.playerTwo.cityTwo + this.playerTwo.cityThree;
        
        // needs to kill game running
        if (playerOneCities < 1) {
            alert(`Player One has lost all their cities!`);
            this.gameOver = true;
        } else if (playerTwoCities < 1) {
            alert('Player Two has lost all theri cities!');
            this.gameOver = true;
        } else if (playerOneCities < 1 && playerTwoCities < 1) {
            alert(`Mutually Assured Destruction!`);
            this.gameOver = true;
        }

    },

// We must give players more uses of infantry, aircraft, and missiles.
// Perhaps infantry, aircraft, and missiles can regenerate at different rates. 
    addAttack() {
        if (this.turns % 4 === 0) {
            this.playerOne.infantry++;
            this.playerTwo.infantry++;
        }
        
        if (this.turns % 6 === 0) {
            this.playerOne.aircraft++;
            this.playerTwo.aircraft++;
        }

        if (this.turns >= 30 && this.turns % 6 === 0) {
            this.playerOne.missiles++;
            this.playerTwo.missiles++;
        }
    },

};

// Modal shows up when game loads
$(window).on('load', function () {
    $('#myModal').modal('show');
});
game.start();

// event handlers
// PLAYER 1

// INFANTRY player one attack player two city ONE

$('#infantryP2CityOne').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackInfantry(game.playerTwo, "cityOne");
    console.log(game.playerTwo);
});

// INFANTRY player one attack player two city TWO

$('#infantryP2CityTwo').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackInfantry(game.playerTwo, "cityTwo");
    console.log(game.playerTwo);
});


// INFANTRY player one attack player two city THREE

$('#infantryP2CityThree').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackInfantry(game.playerTwo, "cityThree");
    console.log(game.playerTwo);
});

// AIRCRAFT player one attack player two city ONE

$('#aircraftP2CityOne').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackAircraft(game.playerTwo, "cityOne");
    console.log(game.playerTwo);
});

// AIRCRAFT player one attack player two city TWO

$('#aircraftP2CityTwo').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackAircraft(game.playerTwo, "cityTwo");
    console.log(game.playerTwo);
});


// AIRCRAFT player one attack player two city THREE

$('#aircraftP2CityThree').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackAircraft(game.playerTwo, "cityThree");
    console.log(game.playerTwo);
});

// MISSILES player one attack player two city ONE

$('#missilesP2CityOne').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackMissiles(game.playerTwo, "cityOne");
    console.log(game.playerTwo);
});

// MISSILES player one attack player two city TWO

$('#missilesP2CityTwo').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackMissiles(game.playerTwo, "cityTwo");
    console.log(game.playerTwo);
});


// MISSILES player one attack player two city THREE

$('#missilesP2CityThree').on('click', function (e) {
    e.preventDefault();
    game.playerOne.attackMissiles(game.playerTwo, "cityThree");
    console.log(game.playerTwo);
});

// BUILD player one Infantry, Aircraft, Missiles
$('#buildInfantryP1').on('click', function (e) {
    e.preventDefault();
    game.playerOne.buildInfantry();
    console.log(game.playerOne.infantry, " P1 Infantry");
});

$('#buildAircraftP1').on('click', function (e) {
    e.preventDefault();
    game.playerOne.buildAircraft();
    console.log(game.playerOne.aircraft, " P1 Aircraft");
});

$('#buildMissilesP1').on('click', function (e) {
    e.preventDefault();
    game.playerOne.buildMissiles();
    console.log(game.playerOne.missiles, " P1 Missiles");
});


// PLAYER 2
// INFANTRY player two attack player one city ONE
$('#p1AreaCityOne').on('click', function(e) {
    e.preventDefault();
    game.playerTwo.attackInfantry(game.playerOne, "cityOne");
    console.log(game.playerOne);
} );

$('#infantryP1CityOne').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackInfantry(game.playerOne, "cityOne");
    console.log(game.playerOne);
});

// INFANTRY player two attack player one city TWO
$('#p1AreaCityTwo').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackInfantry(game.playerOne, "cityTwo");
    console.log(game.playerOne);
});

$('#infantryP1CityTwo').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackInfantry(game.playerOne, "cityTwo");
    console.log(game.playerOne);
});


// INFANTRY player two attack player one city THREE

$('#infantryP1CityThree').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackInfantry(game.playerOne, "cityThree");
    console.log(game.playerOne);
});

// AIRCRAFT player two attack player one city ONE

$('#aircraftP1CityOne').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackAircraft(game.playerOne, "cityOne");
    console.log(game.playerOne);
});

// AIRCRAFT player two attack player one city TWO

$('#aircraftP1CityTwo').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackAircraft(game.playerOne, "cityTwo");
    console.log(game.playerOne);
});


// AIRCRAFT player two attack player one city THREE

$('#aircraftP1CityThree').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackAircraft(game.playerOne, "cityThree");
    console.log(game.playerOne);
});

// MISSILES player two attack player one city ONE

$('#missilesP1CityOne').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackMissiles(game.playerOne, "cityOne");
    console.log(game.playerOne);
});

// MISSILES player two attack player one city TWO

$('#missilesP1CityTwo').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackMissiles(game.playerOne, "cityTwo");
    console.log(game.playerOne);
});


// MISSILES player two attack player one city THREE

$('#missilesP1CityThree').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.attackMissiles(game.playerOne, "cityThree");
    console.log(game.playerOne);
});

// BUILD player two Infantry, Aircraft, Missiles
$('#buildInfantryP2').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.buildInfantry();
    console.log(game.playerTwo.infantry, " P2 Infantry");
});

$('#buildAircraftP2').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.buildAircraft();
    console.log(game.playerTwo.aircraft, " P2 Aircraft");
});

$('#buildMissilesP2').on('click', function (e) {
    e.preventDefault();
    game.playerTwo.buildMissiles();
    console.log(game.playerTwo.missiles, " P2 Missiles");
});




// randomEvent() {
//     * A random event could trigger certain changes of property values of each player object.
//     * They could take away infantry from a player, or perhaps add more hit points to a city.
//     * Math.random() being less than a decimal number(like 0.5) could determine this chance.
//     * Random events will keep increasing in chance over time to simulate the effects of the war.
//     * "Faulty aircraft" "Military Desertion" "Famine" "Plague" "Business Cycle Events" "Natural Disaster"
//         * "Baby Boom" "Scientific Discovery" "Technological Advancement" "Bio-economic Age" "Future of Work" "Military Fervor"
// }

