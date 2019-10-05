class Player {
    constructor() {
        this.cities = [100, 75, 50, 25];
        this.infantry = 3;
        this.aircraft = 1;
        this.missiles = 0;
    }

    // On the DOM, the attack method will need to somehow allow the player to select an attack, and the click will grab a target.

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 5.
    // This method will also decrement(-1) this.infantry

    attackInfantry(target) {
        target.damage -= Math.floor(Math.random() * (5 - 1) + 1);
        this.infantry -= 1; // remove 1 infantry
    }

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 10.
    // This method will also decrement(-1) this.aircraft

    attackAircraft(target) {
        target.damage -= Math.floor(Math.random() * (10-5) + 5);
        this.aircraft -= 1;
    }

    // We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 20
    // This method will also decrement(-1) this.missiles

    attackMissiles(target) {
        target.damage -= Math.floor(Math.random() * (20 - 10) + 10 );
        this.missiles -= 1;
    }

    // Player is able to build between 3 to 10 infantry

    buildInfantry() {
        this.infantry += Math.floor(Math.random() * (10 - 3) + 3 );
    }
    
    // Player is able to build between 3 to 5 aircraft

    buildAircraft() {
        this.aircraft += Math.floor(Math.random() * (5 - 3) + 3 );
    }

    // Player is able to build between 1 to 3 missiles

    buildMissiles() {
        this.missiles += Math.floor(Math.random() * (3 - 1) + 1);
    }
}
