# nation-war-game
GA-SEI-CC-5 JavaScript Video Game

# Nation War Designing.

- Build Player class and Game object.
- Build basic constructors, attack methods, build methods
- Area and Map elements for HTML will be clickable.
- Gather image(s) and coordinate numbers for area and map
- Test if onClick functions will work on hot spots.
- Make onClick methods call attack functions.
- Switch turns correctly after each player attacks.
- Implement a minutes timer at the top.

## User Stories
- The game gives an alert which starts the game.
- Two players can play the game, clicking buttons to interact.
- Buttons will send infantry, aircraft, missile attacks to certain cities.
- Buttons can build more infantry, aircraft, and missiles to continue attacks.
- If no infantry/aircraft/missiles are left, the player receives an alert stating that they have none left.
- Once both players make a move, a turn is iterated. It does not matter the player order.
- Even on last turn where one player has no population, they are still allowed to move one last time to attack. This allows for a possible tie where a "Mutually Assured Destruction" has occured.


## Class Player 
constructor {
    this.cities = [100, 75, 50, 25]
    this.infantry = 3
    this.aircaft = 1
    this.missles = 0
}

On the DOM, the attack method will need to somehow allow the player to select an attack, and the click will grab a target.

attackInfantry(target) {
    * We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 5.
    * This method will also decrement (-1) this.infantry
}

attackAircraft(target) {
    * We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 10.
    * This method will also decrement (-1) this.aircraft
}

attackMissiles(target) {
    * We will use a Math.random() and Math.floor() to initiate an attack value that has a maximum of 20
    * This method will also decrement (-1) this.missiles
}
buildInfantry() {
    * Player is able to build between 3 to 10 infantry
}

buildAircraft() {
    * Player is able to build between 3 to 5 aircraft
}

buildMissiles() {
    * player is able to build between 1 to 3 missiles
}


## game object
start() {
    * Game object will instantiate two objects from the Player class. They will represent Player 1 and Player 2
    * Turns MUST be tracked each time.
    * Initiate a TIMER in Seconds.
    ** probably going to involve a setInterval(function(), 1000)
}

isGameOver() {
    * We must check if the game has ended on each and every turn.
    * This method will need to run on each turn.
    * if Player 1 and Player 2 cities drop to 0, the game is now ended.
    * An alert or modal should appear on screen to let the players know that the game is now over.
    * All setInterval() related methods should no longer initiate.
}

addAttack() {
    * We must give players more uses of infantry, aircraft, and missiles.
    * Perhaps infantry, aircraft, and missiles can regenerate at different rates. 
}

randomEvent() {
    * A random event could trigger certain changes of property values of each player object.
    * They could take away infantry from a player, or perhaps add more hit points to a city.
    * Math.random() being less than a decimal number (like 0.5) could determine this chance.
    * Random events will keep increasing in chance over time to simulate the effects of the war.
    * "Faulty aircraft" "Military Desertion" "Famine" "Plague" "Business Cycle Events" "Natural Disaster"
    * "Baby Boom" "Scientific Discovery" "Technological Advancement" "Bio-economic Age" "Future of Work" "Military Fervor"
}