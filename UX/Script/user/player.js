export class Player {
    constructor() {
        this.health = 250;
        this.defense = 100;
        this.power = 150;
        this.equipment = {
            weapon: null,
            armor: null,
            accessory: null,
        };
    }
    


    updateStats(bonus, action) {
        for (let stat in bonus) {
            this[stat] += action === 'equip' ? bonus[stat] : -bonus[stat];
        }
        this.renderStats();
    }

    renderStats() {
        const statsElement = document.getElementById('playerStats');
        if (statsElement) {
            statsElement.textContent = `Health: ${this.health} | Defense: ${this.defense} | Power: ${this.power}`;
            console.log(`Stats updated: Health: ${this.health} | Defense: ${this.defense} | Power: ${this.power}`);
            document.getElementById('playerHP').innerText = `HP: ${this.health}`;
            document.getElementById('playerPower').innerText = `Power: ${this.power}`;
            document.getElementById('playerDefense').innerText = `Defense: ${this.defense}`
        } else {
            console.error('Stats element not found!');
        }
    }
    
}
