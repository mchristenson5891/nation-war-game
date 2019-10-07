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
        // console.log(target, "is the target");
        let damage = Math.floor(Math.random() * (5 - 1) + 1);
        this.infantry -= 1; // remove 1 infantry
        this.moved = true;
        return target[city] -= damage; 
    }

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 10.
    // This method will also decrement(-1) this.aircraft

    attackAircraft(target, city) {
        let damage = Math.floor(Math.random() * (10-5) + 5);
        this.aircraft -= 1;
        this.moved = true;
        // åreturn target.cityOne -= damage;
        return target[city] -= damage;
    }

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 20
    // This method will also decrement(-1) this.missiles

    attackMissiles(target, city) {
        let damage = Math.floor(Math.random() * (20 - 10) + 10 );
        this.missiles -= 1;
        this.moved = true;
        return target[city] -= damage;
    }

    // Player is able to build between 3 to 10 infantry

    buildInfantry() {
        this.infantry += Math.floor(Math.random() * (10 - 3) + 3 );
        this.moved = true;
    }
    
    // Player is able to build between 3 to 5 aircraft

    buildAircraft() {
        this.aircraft += Math.floor(Math.random() * (5 - 3) + 3 );
        this.moved = true;
    }

    // Player is able to build between 1 to 3 missiles

    buildMissiles() {
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
    },

// Turns MUST be tracked each time.
    turnCheck() {
        // check if gameover conditions are met
        this.isGameOver();
        
        if (game.playerOne.moved === true && game.playerTwo.moved === true) {
            this.turns++;
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



// randomEvent() {
//     * A random event could trigger certain changes of property values of each player object.
//     * They could take away infantry from a player, or perhaps add more hit points to a city.
//     * Math.random() being less than a decimal number(like 0.5) could determine this chance.
//     * Random events will keep increasing in chance over time to simulate the effects of the war.
//     * "Faulty aircraft" "Military Desertion" "Famine" "Plague" "Business Cycle Events" "Natural Disaster"
//         * "Baby Boom" "Scientific Discovery" "Technological Advancement" "Bio-economic Age" "Future of Work" "Military Fervor"
// }

