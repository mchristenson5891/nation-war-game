class Player {
    constructor() {
        // this.cities = [100, 75, 50, 25];
        this.cities = 25;
        this.infantry = 3;
        this.aircraft = 1;
        this.missiles = 0;
        this.moved = false;
    }

    // On the DOM, the attack method will need to somehow allow the player to select an attack, and the click will grab a target.

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 5.
    // This method will also decrement(-1) this.infantry

    attackInfantry(target) {
        console.log(target, "is the target");
        let damage = Math.floor(Math.random() * (5 - 1) + 1);
        this.infantry -= 1; // remove 1 infantry
        this.moved = true;
        target.cities -= damage;
       
    }

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 10.
    // This method will also decrement(-1) this.aircraft

    attackAircraft(target) {
        let damage = Math.floor(Math.random() * (10-5) + 5);
        this.aircraft -= 1;
        this.moved = true;
        target.cities -= damage;
    }

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 20
    // This method will also decrement(-1) this.missiles

    attackMissiles(target) {
        let damage = Math.floor(Math.random() * (20 - 10) + 10 );
        this.missiles -= 1;
        this.moved = true;
        target.cities -= damage;
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

    // Turns MUST be tracked each time.
// Initiate a TIMER in Seconds.
// probably going to involve a setInterval(function (), 1000)


    


// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
    start()  {
        // new instances of player
        this.playerOne = new Player();
        this.playerTwo = new Player();
        console.log(this.playerOne);
        console.log(this.playerTwo);
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
        if (this.playerOne.cities.reduce(reducer) === 0) {
            alert("Player 1 defeated!");
            return "gameover";
        } else if (this.playerOne.cities.reduce(reducer) === 0) {
            alert("Player 2 defeated!");
            return "gameover";
        } else if (this.playerOne.cities.reduce(reducer) === 0 && this.playerTwo.cities.reduce(reducer) === 0) {
            alert("Mutually Assured Destruction!");
            return "gameover";
        }
        
    },

//     * We must give players more uses of infantry, aircraft, and missiles.
//     * Perhaps infantry, aircraft, and missiles can regenerate at different rates. 
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

game.start()
console.log(game.playerOne.attackInfantry(game.playerTwo));

console.log(game.playerTwo.cities);

// randomEvent() {
//     * A random event could trigger certain changes of property values of each player object.
//     * They could take away infantry from a player, or perhaps add more hit points to a city.
//     * Math.random() being less than a decimal number(like 0.5) could determine this chance.
//     * Random events will keep increasing in chance over time to simulate the effects of the war.
//     * "Faulty aircraft" "Military Desertion" "Famine" "Plague" "Business Cycle Events" "Natural Disaster"
//         * "Baby Boom" "Scientific Discovery" "Technological Advancement" "Bio-economic Age" "Future of Work" "Military Fervor"
// }