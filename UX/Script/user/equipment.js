    class Equipment {
    constructor(name, type, bonus) {
        this.name = name;
        this.type = type;
        this.bonus = bonus; 
    }
}

export class EquipmentManager {
    constructor(player) {
        this.equipmentList = {
            weapon: [],
            armor: [],
            accessory: []
        };
        this.equipmentEquip = false;
        this.player = player;  // Inject player object into the manager
    }

    // Add new equipment dynamically
    newEquipment(name, type, bonus) {
        this.equipmentList[type].push(new Equipment(name, type, bonus));
        this.displayEquipment(this.equipmentList[type], `${type}Display`, type);
    }

    
    equipItem(category, item) {
        if (this.player.equipment[category]) {
            this.unequipItem(category, this.player.equipment[category]);
        }
        this.player.equipment[category] = item;
        this.player.updateStats(item.bonus, 'equip');
        this.equipmentEquip = true;
    }
    
    unequipItem(category, item) {
        this.player.equipment[category] = null;
        this.player.updateStats(item.bonus, 'unequip');
    }
    

    // Update buttons for the current category
    updateButtons(containerClass, equippedItem, category) {
        const container = document.querySelector(`.${containerClass}`);
        const buttons = container.querySelectorAll('.equipButton');
        const items = container.querySelectorAll('.equipmentItem');

        items.forEach((itemDiv, index) => {
            const button = buttons[index];
            const nameSpan = itemDiv.querySelector('span').textContent;
            button.textContent = nameSpan.includes(equippedItem.name) ? 'Unequip' : 'Equip';
        });
    }

    // Display equipment in the UI
    displayEquipment(equipmentArray, containerClass, category) {
        const container = document.querySelector(`.${containerClass}`);
        container.innerHTML = ''; // Clear existing content

        equipmentArray.forEach(equipment => {
            const equipmentDiv = document.createElement('div');
            equipmentDiv.className = 'equipmentItem';

            const bonusDetails = Object.entries(equipment.bonus)
                .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: +${value}`)
                .join(', ');

            const nameSpan = document.createElement('span');
            nameSpan.textContent = `${equipment.name} (${bonusDetails})`;

            const equipButton = document.createElement('button');
            equipButton.className = 'equipButton';
            equipButton.textContent = this.player.equipment[category] === equipment ? 'Unequip' : 'Equip';

            equipButton.addEventListener('click', () => {
                if (this.player.equipment[category] === equipment) {
                    this.unequipItem(category, equipment);
                    equipButton.textContent = 'Equip';
                } else {
                    this.equipItem(category, equipment);
                    this.updateButtons(containerClass, equipment, category);
                }
            });

            equipmentDiv.appendChild(nameSpan);
            equipmentDiv.appendChild(equipButton);
            container.appendChild(equipmentDiv);
        });
    }

    // Display all equipment categories
    displayAllEquipment() {
        Object.keys(this.equipmentList).forEach(type => {
            this.displayEquipment(this.equipmentList[type], `${type}Display`, type);
        });
    }
}
