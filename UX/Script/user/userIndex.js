import { EquipmentManager } from './equipment.js';
import { Player } from './player.js';

// Create instances of Player and EquipmentManager
const player = new Player();
const equipmentManager = new EquipmentManager(player);

window.player = new Player();

document.querySelector('.play-button').addEventListener('click', function() {
    if(!equipmentManager.equipmentEquip){
        alert('please equip some equipment first!');
    } else {
        document.querySelector('.Game-menu').style.display = 'none';
    }
});

equipmentManager.displayAllEquipment();

//weapon
equipmentManager.newEquipment("Sword of Power", "weapon", { power: 20 });
equipmentManager.newEquipment("Excalibur", "weapon", { power: 35 });
equipmentManager.newEquipment("Hero Sword", "weapon", { power: 50 });
equipmentManager.newEquipment("Sword of Doom", "weapon", { power: 200 });
equipmentManager.newEquipment("Dagger", "weapon", { power: 100});

//armor
equipmentManager.newEquipment("Steel Armor", "armor", { defense: 20 });
equipmentManager.newEquipment("Dragon Scale", "armor", { defense: 40 });
equipmentManager.newEquipment("Mystic Robe", "armor", { health: 20, defense: 15 });

//accessory
equipmentManager.newEquipment("Ring of Health", "accessory", { health: 30 });
equipmentManager.newEquipment("Amulet of Strength", "accessory", { power: 10 });
equipmentManager.newEquipment("Talisman of Protection", "accessory", { defense: 15 });
equipmentManager.newEquipment("Developer Dick", "accessory", { health: 999, defense: 999, power: 999});


