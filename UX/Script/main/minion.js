// minion.js
export class Minion {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    // Function to "kill" the minion
    die() {
        this.health = 0;
        console.log(`${this.name} has died!`);
    }

    // Function to check if the minion is alive
    isAlive() {
        return this.health > 0;
    }
}
